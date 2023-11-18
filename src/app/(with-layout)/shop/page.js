import BreadCrumb from "@/components/shared/BreadCrumb";
import FeaturedProducts from "@/components/ui/HomePageUI/FeaturedProducts";
import ShopProducts from "@/components/ui/ShopPageUI/ShopProducts";
import getProducts from "@/utils/getProducts";

const ShopPage = async () => {
  const allProducts = await getProducts();
  console.log("object", allProducts);
  return (
    <div>
      <div
        className="hero h-[400px] bg-fixed"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/fMkCHHB/istockphoto-1316127257-612x612.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg backdrop-blur-sm bg-white bg-opacity-50 px-28 py-5">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">Our Shop</h1>
            <BreadCrumb bread={"Shop"} link={"/shop"} />
          </div>
        </div>
      </div>
      <ShopProducts allProducts={allProducts} />
      {<FeaturedProducts products={allProducts} />}
    </div>
  );
};

export default ShopPage;
