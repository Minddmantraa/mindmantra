"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();
  
  // Check if we are inside the admin portal pages
  const isAdmin = pathname ? pathname.startsWith("/admin") : false;

  if (isAdmin) {
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: `
          /* Force hide public website header and footer on admin routes */
          [class*="Header_topBar"],
          [class*="Header_navWrapper"],
          [class*="Footer_footer"],
          header,
          footer {
            display: none !important;
            height: 0 !important;
            opacity: 0 !important;
            pointer-events: none !important;
            visibility: hidden !important;
          }
        `}} />
        {children}
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      
      {/* Sticky WhatsApp Contact Button */}
      <a 
        href="https://wa.me/917706000771" 
        className="whatsapp-sticky" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.714-1.465L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.394 9.807-9.805.002-2.618-1.018-5.083-2.872-6.938C16.353 1.996 13.89 1.977 12.007 1.977c-5.41 0-9.813 4.397-9.817 9.806-.001 1.503.418 2.972 1.214 4.254L2.348 20.6l4.299-1.446zm11.758-5.326c-.29-.145-1.716-.848-1.982-.945-.267-.097-.461-.145-.655.145-.194.29-.752.945-.921 1.139-.17.194-.339.218-.63.073-.29-.145-1.222-.45-2.328-1.437-.86-.767-1.44-1.716-1.609-2.007-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.194-.291.291-.485.097-.194.048-.364-.024-.509-.073-.145-.655-1.577-.898-2.16-.236-.569-.476-.491-.655-.5-.17-.008-.364-.01-.558-.01-.194 0-.509.073-.776.364-.267.29-1.02 1.02-1.02 2.487 0 1.467 1.067 2.88 1.213 3.074.146.194 2.1 3.2 5.086 4.49.711.307 1.266.49 1.7.63.714.227 1.36.195 1.872.118.571-.085 1.716-.703 1.958-1.382.243-.68.243-1.261.17-1.382-.073-.122-.267-.194-.558-.339z"/>
        </svg>
      </a>
    </>
  );
}
