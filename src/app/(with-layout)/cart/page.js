import BreadCrumb from "@/components/shared/BreadCrumb";
import cartBanner from "../../../assets/servicesBanner/cartBanner.jpg";
import Cart from "@/components/shared/Cart";

const CartPage = () => {
  return (
    <div>
      <div
        className="hero h-[460px] bg-fixed"
        style={{
          backgroundImage: `url(${cartBanner.src})`,
        }}
      >
        <div className="hero-overlay bg-opacity-40"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2xl backdrop-blur-sm bg-white bg-opacity-30 px-24 py-8">
            <h1 className="mb-5 text-5xl font-bold text-[#242424]">My Cart</h1>
            <BreadCrumb bread={"My Cart"} link={"/cart"} />
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-20">
        <Cart />
      </div>
    </div>
  );
};

export default CartPage;
