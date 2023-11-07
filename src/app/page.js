import About from "@/components/ui/HomePageUI/About";
import Banner from "@/components/ui/HomePageUI/Banner";
import CompanyLogo from "@/components/ui/HomePageUI/CompanyLogo";
import FeatureService from "@/components/ui/HomePageUI/FeatureService/FeatureService";
import ImageGallery from "@/components/ui/HomePageUI/ImageGallery/ImageGallery";
import OurCare from "@/components/ui/HomePageUI/OurCare";
import PricingPlan from "@/components/ui/HomePageUI/PricingPlan";
import ShopProducts from "@/components/ui/ShopPageUI/ShopProducts";
import Testimonials from "@/components/ui/HomePageUI/Testimonials";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CompanyLogo />
      <FeatureService />
      <About />
      <OurCare />
      <Testimonials />
      <ImageGallery />
      <PricingPlan />
      <Footer />
    </div>
  );
}
