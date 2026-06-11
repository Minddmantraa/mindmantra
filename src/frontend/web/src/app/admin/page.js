"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import styles from "./admin.module.css";

const servicesList = [
  "Obsessive Compulsive Disorder Recovery",
  "Sexual Dysfunctionality (ED, PME & Compulsive Masturbation)",
  "Bipolar Disorder Support",
  "Sleep Disorder Management",
  "Eating Disorder Therapy",
  "Relationship Management",
  "Schizophrenia Support",
  "Anxiety & Depression Support",
  "Addiction & De-addiction Support"
];

const timeSlotsList = [
  "09:00 AM - 09:30 AM",
  "09:30 AM - 10:00 AM",
  "10:00 AM - 10:30 AM",
  "10:30 AM - 11:00 AM",
  "11:00 AM - 11:30 AM",
  "11:30 AM - 12:00 PM",
  "12:00 PM - 12:30 PM",
  "12:30 PM - 01:00 PM",
  "01:00 PM - 01:30 PM",
  "01:30 PM - 02:00 PM",
  "02:00 PM - 02:30 PM",
  "02:30 PM - 03:00 PM",
  "03:00 PM - 03:30 PM",
  "03:30 PM - 04:00 PM",
  "04:00 PM - 04:30 PM",
  "04:30 PM - 05:00 PM",
  "05:00 PM - 05:30 PM",
  "05:30 PM - 06:00 PM",
  "06:00 PM - 06:30 PM",
  "06:30 PM - 07:00 PM",
  "07:00 PM - 07:30 PM",
  "07:30 PM - 08:00 PM",
  "08:00 PM - 08:30 PM",
  "08:30 PM - 09:00 PM"
];

export default function AdminDashboardPage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [addFormData, setAddFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Obsessive Compulsive Disorder Recovery",
    date: "",
    time_slot: "09:00 AM - 09:30 AM",
    message: "",
    payment_status: "paid"
  });
  
  // Filters state
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [dateFilter, setDateFilter] = useState("");

  const router = useRouter();

  useEffect(() => {
    const checkAuthAndFetch = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/admin/login");
      } else {
        setCheckingAuth(false);
        await fetchBookings();
      }
    };
    checkAuthAndFetch();
  }, [router]);

  const fetchBookings = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching bookings:", error);
        alert("Failed to load bookings from Supabase. Ensure bookings table exists and RLS policies are configured.");
      } else {
        setBookings(data || []);
      }
    } catch (err) {
      console.error("Network error fetching bookings:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const generateBookingRef = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let ref = "";
    for (let i = 0; i < 5; i++) {
      ref += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return `MM-${ref}`;
  };

  const handleDeleteBooking = async (id, e) => {
    if (e) e.stopPropagation();

    const confirmDelete = window.confirm(
      "Are you sure you want to permanently delete this booking record? This action cannot be undone."
    );
    if (!confirmDelete) return;

    try {
      const { error } = await supabase.from("bookings").delete().eq("id", id);

      if (error) {
        console.error("Delete booking error:", error);
        alert(`Failed to delete record: ${error.message}`);
        return;
      }

      setBookings((prev) => prev.filter((b) => b.id !== id));
      if (selectedBooking && selectedBooking.id === id) {
        setSelectedBooking(null);
      }
    } catch (err) {
      console.error("Network error deleting booking:", err);
      alert("Failed to delete record due to a network error.");
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const ref = generateBookingRef();
      const { data, error } = await supabase
        .from("bookings")
        .insert({
          booking_ref: ref,
          name: addFormData.name,
          phone: addFormData.phone,
          email: addFormData.email || null,
          service: addFormData.service,
          date: addFormData.date || null,
          time_slot: addFormData.time_slot,
          message: addFormData.message || null,
          payment_status: addFormData.payment_status,
          razorpay_order_id: "manual_booking",
          razorpay_payment_id: "manual_" + Math.random().toString(36).substring(2, 9).toUpperCase(),
        })
        .select()
        .single();

      if (error) {
        console.error("Manual booking insert error:", error);
        alert(`Failed to create manual booking: ${error.message}`);
        setSaving(false);
        return;
      }

      setBookings((prev) => [data, ...prev]);
      setIsAddModalOpen(false);
      setAddFormData({
        name: "",
        phone: "",
        email: "",
        service: "Obsessive Compulsive Disorder Recovery",
        date: "",
        time_slot: "09:00 AM - 09:30 AM",
        message: "",
        payment_status: "paid",
      });
    } catch (err) {
      console.error("Network error inserting manual booking:", err);
      alert("Failed to add booking due to a network error.");
    } finally {
      setSaving(false);
    }
  };

  // Stats calculations
  const totalBookings = bookings.length;
  const paidBookings = bookings.filter((b) => b.payment_status === "paid");
  const totalRevenue = paidBookings.reduce((sum) => sum + 1, 0); // ₹1 per paid session
  const pendingBookings = bookings.filter((b) => b.payment_status === "pending").length;

  // Filter application
  const filteredBookings = bookings.filter((b) => {
    const matchesSearch =
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.phone.includes(searchQuery) ||
      (b.booking_ref && b.booking_ref.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesStatus = statusFilter === "all" || b.payment_status === statusFilter;
    const matchesService = serviceFilter === "all" || b.service === serviceFilter;
    const matchesDate = !dateFilter || b.date === dateFilter;

    return matchesSearch && matchesStatus && matchesService && matchesDate;
  });

  if (checkingAuth) {
    return (
      <div className={styles.adminContainer} style={{ justifyContent: "center", alignItems: "center" }}>
        <p>Verifying admin session...</p>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      {/* Navigation */}
      <nav className={styles.dashboardNav}>
        <div className="container">
          <div className={styles.navContainer}>
            <div className={styles.logoArea}>
              <span className={styles.logoText}>Mind Mantra Admin</span>
              <span className={styles.badgeAdmin}>Workspace</span>
            </div>
            <button onClick={handleLogout} className={styles.btnLogout}>
              Sign Out
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className={styles.dashboardContent}>
        <div className="container">
          {/* Stats Section */}
          <div className={styles.statsGrid}>
            {/* Stat 1 */}
            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.blue}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>Total Bookings</span>
                <span className={styles.statValue}>{totalBookings}</span>
              </div>
            </div>

            {/* Stat 2 */}
            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.green}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>Revenue Collected</span>
                <span className={styles.statValue}>₹{totalRevenue}</span>
              </div>
            </div>

            {/* Stat 3 */}
            <div className={styles.statCard}>
              <div className={`${styles.statIconWrapper} ${styles.orange}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statLabel}>Pending Payments</span>
                <span className={styles.statValue}>{pendingBookings}</span>
              </div>
            </div>
          </div>

          {/* Controls Bar */}
          <div className={styles.controlsRow}>
            <div className={styles.searchWrapper}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={styles.searchIcon} style={{ width: "18px", height: "18px" }}>
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search by name, phone or reference ID..."
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className={styles.filterGroup}>
              {/* Service Filter */}
              <select
                className={styles.filterSelect}
                value={serviceFilter}
                onChange={(e) => setServiceFilter(e.target.value)}
              >
                <option value="all">All Focus Areas</option>
                {servicesList.map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
              </select>

              {/* Status Filter */}
              <select
                className={styles.filterSelect}
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Payment Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="failed">Failed</option>
              </select>

              {/* Date Filter */}
              <input
                type="date"
                className={styles.filterDate}
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
              />

              <button className={styles.btnAddBooking} onClick={() => setIsAddModalOpen(true)}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span>Add Booking</span>
              </button>
            </div>
          </div>

          {/* Data Table */}
          <div className={styles.tableWrapper}>
            {loading ? (
              <div style={{ padding: "80px", textAlignment: "center" }}>
                <p>Loading bookings...</p>
              </div>
            ) : filteredBookings.length === 0 ? (
              <div className={styles.emptyState}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
                <p>No matching booking requests found.</p>
              </div>
            ) : (
              <table className={styles.bookingTable}>
                <thead>
                  <tr>
                    <th>Ref ID</th>
                    <th>Client details</th>
                    <th>Clinical focus</th>
                    <th>Requested slot</th>
                    <th>Payment status</th>
                    <th className={styles.actionsColumnHeader}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map((booking) => (
                    <tr
                      key={booking.id}
                      className={styles.tableRow}
                      onClick={() => setSelectedBooking(booking)}
                    >
                      <td>
                        <span style={{ fontWeight: "600", fontFamily: "var(--font-serif)" }}>
                          {booking.booking_ref || "N/A"}
                        </span>
                      </td>
                      <td className={styles.clientNameCell}>
                        <div className={styles.clientName}>{booking.name}</div>
                        <div style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                          {booking.phone} {booking.email ? `| ${booking.email}` : ""}
                        </div>
                      </td>
                      <td className={styles.serviceText}>{booking.service}</td>
                      <td>
                        <div className={styles.dateVal}>
                          {booking.date ? new Date(booking.date).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric"
                          }) : "Flexible Date"}
                        </div>
                        <div style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
                          {booking.time_slot}
                        </div>
                      </td>
                      <td>
                        <span className={`${styles.badge} ${styles[booking.payment_status]}`}>
                          {booking.payment_status}
                        </span>
                      </td>
                      <td className={styles.actionsColumnCell} onClick={(e) => e.stopPropagation()}>
                        <button
                          className={styles.btnTableDelete}
                          onClick={(e) => handleDeleteBooking(booking.id, e)}
                          title="Delete Booking"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>

      {/* Details Side Drawer */}
      {selectedBooking && (
        <>
          <div className={styles.drawerOverlay} onClick={() => setSelectedBooking(null)}></div>
          <div className={styles.drawerContent}>
            <div className={styles.drawerHeader}>
              <h3 className={styles.drawerTitle}>Booking Details</h3>
              <button className={styles.btnCloseDrawer} onClick={() => setSelectedBooking(null)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Client Info Section */}
            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionTitle}>Client Profile</div>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Full Name</span>
                  <span className={styles.infoValue}>{selectedBooking.name}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Phone Number</span>
                  <span className={styles.infoValue}>{selectedBooking.phone}</span>
                </div>
                <div className={`${styles.infoItem} ${styles.fullWidth}`}>
                  <span className={styles.infoLabel}>Email Address</span>
                  <span className={styles.infoValue}>{selectedBooking.email || "Not Provided"}</span>
                </div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionTitle}>Preferred Schedule</div>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Session Date</span>
                  <span className={styles.infoValue}>
                    {selectedBooking.date ? new Date(selectedBooking.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric"
                    }) : "Flexible / First Available"}
                  </span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Time Slot</span>
                  <span className={styles.infoValue}>{selectedBooking.time_slot}</span>
                </div>
                <div className={`${styles.infoItem} ${styles.fullWidth}`}>
                  <span className={styles.infoLabel}>Clinical Focus Area</span>
                  <span className={styles.infoValue}>{selectedBooking.service}</span>
                </div>
              </div>
            </div>

            {/* Payment Section */}
            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionTitle}>Transaction Details</div>
              <div className={styles.infoGrid}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Consultation Fee</span>
                  <span className={styles.infoValue}>₹1.00</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Payment Status</span>
                  <span className={`${styles.badge} ${styles[selectedBooking.payment_status]}`} style={{ alignSelf: "flex-start", marginTop: "2px" }}>
                    {selectedBooking.payment_status}
                  </span>
                </div>
                <div className={`${styles.infoItem} ${styles.fullWidth}`}>
                  <span className={styles.infoLabel}>Booking Reference ID</span>
                  <span className={styles.infoValue} style={{ fontFamily: "var(--font-serif)", fontWeight: "600" }}>
                    {selectedBooking.booking_ref || "N/A"}
                  </span>
                </div>
                <div className={`${styles.infoItem} ${styles.fullWidth}`}>
                  <span className={styles.infoLabel}>Razorpay Order ID</span>
                  <span className={styles.infoValue} style={{ fontFamily: "monospace", fontSize: "12px", color: "var(--color-text-muted)" }}>
                    {selectedBooking.razorpay_order_id || "N/A"}
                  </span>
                </div>
                <div className={`${styles.infoItem} ${styles.fullWidth}`}>
                  <span className={styles.infoLabel}>Razorpay Payment ID</span>
                  <span className={styles.infoValue} style={{ fontFamily: "monospace", fontSize: "12px", color: "var(--color-text-muted)" }}>
                    {selectedBooking.razorpay_payment_id || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Symptoms/Notes */}
            <div className={styles.drawerSection}>
              <div className={styles.drawerSectionTitle}>Client Clinical Concerns</div>
              <div className={styles.symptomBox}>
                {selectedBooking.message || "No clinical description was submitted."}
              </div>
            </div>

            {/* Delete button inside drawer */}
            <button
              className={styles.btnDeleteBooking}
              onClick={(e) => handleDeleteBooking(selectedBooking.id, e)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ marginRight: "6px" }}>
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
              <span>Delete Booking Record</span>
            </button>
          </div>
        </>
      )}

      {/* Manual Booking Modal */}
      {isAddModalOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsAddModalOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>Add Booking Manually</h3>
              <button className={styles.btnCloseModal} onClick={() => setIsAddModalOpen(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <form onSubmit={handleAddSubmit} className={styles.modalForm}>
              <div className={styles.modalFormGrid}>
                <div className={styles.modalFormGroup}>
                  <label>Client Name *</label>
                  <input
                    type="text"
                    required
                    value={addFormData.name}
                    onChange={(e) => setAddFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="Enter client's full name"
                  />
                </div>
                <div className={styles.modalFormGroup}>
                  <label>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={addFormData.phone}
                    onChange={(e) => setAddFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="e.g. +91 98765 43210"
                  />
                </div>
              </div>

              <div className={styles.modalFormGroup}>
                <label>Email Address (Optional)</label>
                <input
                  type="email"
                  value={addFormData.email}
                  onChange={(e) => setAddFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="client@example.com"
                />
              </div>

              <div className={styles.modalFormGroup}>
                <label>Clinical Focus Area</label>
                <select
                  value={addFormData.service}
                  onChange={(e) => setAddFormData((prev) => ({ ...prev, service: e.target.value }))}
                >
                  {servicesList.map((service, idx) => (
                    <option key={idx} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.modalFormGrid}>
                <div className={styles.modalFormGroup}>
                  <label>Session Date (Optional)</label>
                  <input
                    type="date"
                    value={addFormData.date}
                    onChange={(e) => setAddFormData((prev) => ({ ...prev, date: e.target.value }))}
                  />
                </div>
                <div className={styles.modalFormGroup}>
                  <label>Time Slot</label>
                  <select
                    value={addFormData.time_slot}
                    onChange={(e) => setAddFormData((prev) => ({ ...prev, time_slot: e.target.value }))}
                  >
                    {timeSlotsList.map((slot, idx) => (
                      <option key={idx} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.modalFormGrid}>
                <div className={styles.modalFormGroup}>
                  <label>Payment Status</label>
                  <select
                    value={addFormData.payment_status}
                    onChange={(e) => setAddFormData((prev) => ({ ...prev, payment_status: e.target.value }))}
                  >
                    <option value="paid">Paid</option>
                    <option value="pending">Pending</option>
                    <option value="failed">Failed</option>
                  </select>
                </div>
              </div>

              <div className={styles.modalFormGroup}>
                <label>Clinical Description / Notes (Optional)</label>
                <textarea
                  rows="3"
                  value={addFormData.message}
                  onChange={(e) => setAddFormData((prev) => ({ ...prev, message: e.target.value }))}
                  placeholder="Provide clinical symptoms, diagnosis notes, etc."
                />
              </div>

              <div className={styles.modalButtons}>
                <button
                  type="button"
                  className={styles.btnCancel}
                  onClick={() => setIsAddModalOpen(false)}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={styles.btnAddBooking}
                  disabled={saving}
                >
                  {saving ? "Saving..." : "Save Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
