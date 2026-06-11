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
    </>
  );
}
