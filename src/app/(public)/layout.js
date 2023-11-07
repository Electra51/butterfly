"use client";

import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function PublicLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default PublicLayout;
