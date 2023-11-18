import AddToCardBtn from "@/components/shared/AddToCardBtn";
import BreadCrumb2 from "@/components/shared/BreadCrumb2";
import Star from "@/components/shared/Star";
import DetailsImage from "@/components/ui/ShopPageUI/DetailsImage";
import RelatedProduct from "@/components/ui/ShopPageUI/RelatedProduct";
import getSingleProducts from "@/utils/getSingleProducts";
import dynamic from "next/dynamic";
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

      <div className="grid grid-cols-2 gap-10 max-w-7xl mx-auto my-10 justify-start items-start">
        <div>
          <DetailsImage productImage={product?.img} />
        </div>
        <div>
          <p>{product?.name}</p>
          <p>
            <Star ratingPoint={product?.rating} /> ({product?.review} reviews)
          </p>
          <div className="flex justify-start gap-14 items-center">
            <p>Price: $ {product?.price}</p>
            <div className="badge badge-primary">{product?.stock}</div>
          </div>
          <hr className="my-5" />
          <p>Brand:{product?.brand}</p>
          <p>Material:{product?.material}</p>
          <p>Weight: {product?.item_weight}</p>
          <div>
            {product?.tag_list?.map((e, i) => (
              <div className="badge badge-primary" key={i}>
                {e}
              </div>
            ))}
          </div>
          <p>{product?.details}</p>
          <p>Product Type: {product?.product_type}</p>
          <AddToCardBtn id={product?._id} />
          <button>Buy Now</button>
        </div>
      </div>
      <div className="grid grid-cols-4 max-w-7xl mx-auto gap-7">
        {product?.related?.map((e, index) => (
          <RelatedProduct e={e} key={index} />
        ))}
      </div>
    </div>
  );
};

// export default ShopDetails;
export default dynamic(() => Promise.resolve(ShopDetails), { ssr: false });
