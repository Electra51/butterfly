import BreadCrumb2 from "@/components/shared/BreadCrumb2";
import Star from "@/components/shared/Star";
import DetailsImage from "@/components/ui/ShopPageUI/DetailsImage";
import RelatedProduct from "@/components/ui/ShopPageUI/RelatedProduct";

const ShopDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/products/${params?.id}`, {
    cache: "no-store",
  });
  const data = await res.json();
  console.log(data?.related);
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
            <BreadCrumb2 bread={`${data?.product_type}`} link={"/shop"} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-10 max-w-7xl mx-auto my-10 justify-start items-start">
        <div>
          <DetailsImage dataImage={data?.img} />
        </div>
        <div>
          <p>{data?.name}</p>
          <p>
            <Star ratingPoint={data?.rating} /> ({data?.review} reviews)
          </p>
          <div className="flex justify-start gap-14 items-center">
            <p>Price: $ {data?.price}</p>
            <div className="badge badge-primary">{data?.stock}</div>
          </div>
          <hr className="my-5" />
          <p>Brand:{data?.brand}</p>
          <p>Material:{data?.material}</p>
          <p>Weight: {data?.item_weight}</p>
          <div>
            {data?.tag_list?.map((e, i) => (
              <div className="badge badge-primary">{e}</div>
            ))}
          </div>
          <p>{data?.details}</p>
          <p>Product Type: {data?.product_type}</p>
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="grid grid-cols-4 max-w-7xl mx-auto gap-7">
        {data?.related?.map((e, index) => (
          <RelatedProduct e={e} />
        ))}
      </div>
    </div>
  );
};

export default ShopDetails;
