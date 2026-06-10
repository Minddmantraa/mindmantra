"use client";

import { useState, useEffect } from "react";
import { dsmData } from "./dsmData";
import styles from "./dsm5.module.css";

export default function Dsm5Client() {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeCategory, setActiveCategory] = useState(1);

  // Set first category expanded by default on load
  useEffect(() => {
    setExpandedCategories({ 1: true });
  }, []);

  const toggleCategory = (id) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSidebarClick = (id) => {
    setActiveCategory(id);
    setExpandedCategories((prev) => ({
      ...prev,
      [id]: true,
    }));
    const element = document.getElementById(`cat-${id}`);
    if (element) {
      // Using offset scroll to account for floating header
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.dsmLayout}>
      {/* Left Sidebar categories index */}
      <aside className={styles.sidebar}>
        <h3 className={styles.sidebarHeading}>Conditions Index</h3>
        {dsmData.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleSidebarClick(cat.id)}
            className={`${styles.sidebarBtn} ${
              activeCategory === cat.id ? styles.sidebarBtnActive : ""
            }`}
          >
            {cat.title}
          </button>
        ))}
      </aside>

      {/* Right Content Area */}
      <div className={styles.contentArea}>
        {/* Categories Listing */}
        {dsmData.map((category) => {
          const isExpanded = !!expandedCategories[category.id];
          return (
            <div
              key={category.id}
              id={`cat-${category.id}`}
              className={styles.categoryCard}
            >
              {/* Header Toggle */}
              <button
                onClick={() => toggleCategory(category.id)}
                className={styles.categoryHeader}
                aria-expanded={isExpanded}
              >
                <h3 className={styles.categoryTitle}>
                  {category.title}
                </h3>
                <svg
                  className={`${styles.categoryIcon} ${
                    isExpanded ? styles.categoryIconRotated : ""
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  style={{ width: "20px", height: "20px" }}
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* Content Accordion */}
              {isExpanded && (
                <div className={styles.categoryContent}>
                  <ul className={styles.list}>
                    {category.items.map((item, idx) => {
                      if (item.type === "subtitle") {
                        return (
                          <li key={idx} className={styles.itemSubtitle}>
                            {item.text}
                          </li>
                        );
                      }
                      return (
                        <li key={idx} className={styles.itemBullet}>
                          <svg
                            className={styles.bulletIcon}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            style={{ width: "12px", height: "12px" }}
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>
                            {item.text}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
