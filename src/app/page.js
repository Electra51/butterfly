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
import OurProduct from "@/components/ui/AboutUsPageUI/OurProduct";
import FeaturedProducts from "@/components/ui/HomePageUI/FeaturedProducts";
import WhyChoose from "@/components/ui/HomePageUI/WhyChoose";
import ContactUs from "@/components/ui/HomePageUI/ContactUs";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <CompanyLogo />
      <FeatureService />
      <About />
      <OurCare />
      <FeaturedProducts />
      <Testimonials />
      <ImageGallery />
      <WhyChoose />
      <PricingPlan />
      <ContactUs />
      {/* <Footer /> */}
    </div>
  );
}
