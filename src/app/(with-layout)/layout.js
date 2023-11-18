import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function WithLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default WithLayout;
