import AddToCardBtn from "@/components/shared/AddToCardBtn";
import BreadCrumb2 from "@/components/shared/BreadCrumb2";
import Star from "@/components/shared/Star";
import DetailsImage from "@/components/ui/ShopPageUI/DetailsImage";
import RelatedProduct from "@/components/ui/ShopPageUI/RelatedProduct";
import getSingleProducts from "@/utils/getSingleProducts";
import dynamic from "next/dynamic";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiShoppingBag2Line } from "react-icons/ri";
export const revalidate = 0;

const ShopDetails = async ({ params: { id } }) => {
  const product = await getSingleProducts(id);
  console.log(product);
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
            <BreadCrumb2 bread={`${product?.product_type}`} link={"/shop"} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto my-14 justify-start items-start">
        <div>
          <DetailsImage productImage={product?.img} />

          <div className="flex justify-center items-center mt-14 gap-5">
            <Link
              href=""
              className="flex items-center cursor-pointer border border-gray-700 px-2 py-1 buttonBuy bBuy"
            >
              <p className="text-[14px]">Buy Now</p>
            </Link>
            <button className="buttonCart bCart text-[#c2a74e]">
              Add To Cart <AiOutlineShoppingCart className="text-xl" />
            </button>
          </div>
        </div>
        <div>
          <p className="text-xl font-bold tracking-[0.02rem] mb-2">
            {product?.name}
          </p>
          <p className="flex items-center justify-start gap-4 text-black font-medium">
            <Star ratingPoint={product?.rating} /> ({product?.review} reviews)
          </p>
          <div className="flex justify-start gap-14 items-center">
            <p className="text-black font-medium mt-1">
              Price: $ {product?.price}
            </p>
            <div className="badge bg-red-600 text-white text-[12px] mt-1">
              {product?.stock}
            </div>
          </div>
          <hr className="my-5" />
          <p className="text-black font-medium mt-1">
            <span className="font-semibold">Brand: </span>
            {product?.brand}
          </p>
          <p className="text-black font-medium mt-1">
            <span className="font-semibold">Material: </span>
            {product?.material}
          </p>
          <p className="text-black font-medium mt-1">
            <span className="font-semibold">Weight: </span>{" "}
            {product?.item_weight}
          </p>
          <p className="text-black font-medium mt-1">
            <span className="font-semibold">Product Type: </span>{" "}
            {product?.product_type}
          </p>
          <div className="flex flex-wrap justify-normal gap-2 items-center max-w-md my-2 text-white">
            {product?.tag_list?.map((e, i) => (
              <div
                className="bg-[#c2a74e] px-3 py-0 rounded-full text-[14px]"
                key={i}
              >
                {e}
              </div>
            ))}
          </div>
          <p className="mt-3 text-justify tracking-[0.02rem] font-medium">
            {product?.details}
          </p>
        </div>
      </div>
      <p className="text-2xl font-semibold text-black mt-16 max-w-6xl mx-auto">
        Related Products{" "}
      </p>
      <div className="grid grid-cols-4 max-w-6xl mx-auto gap-7 mt-6">
        {product?.related?.map((e, index) => (
          <RelatedProduct e={e} key={index} />
        ))}
      </div>
    </div>
  );
};

// export default ShopDetails;
export default dynamic(() => Promise.resolve(ShopDetails), { ssr: false });
