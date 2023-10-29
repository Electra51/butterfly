"use client";
import Star from "@/components/shared/Star";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import SweetAlert2 from "react-sweetalert2";
const ShopCard = ({ product }) => {
  // const handleAddToCart = (product) => {
  //   console.log(product);
  // };
  const handleAddToCart = (product) => {
    console.log(product);
    // if (user && user.email) {
    // const cartItem = {
    //   menuItemId: _id,
    //   name,
    //   image,
    //   price,
    //   email: user.email,
    // };
    fetch("http://localhost:5000/carts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          refetch(); // refetch cart to update the number of items in the cart
          SweetAlert2.fire({
            position: "top-end",
            icon: "success",
            title: "Food added on the cart.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    // }
    // else {
    //   Swal.fire({
    //     title: "Please login to order the food",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Login now!",
    //   }).then((result) => {
    //     if (result.isConfirmed) {
    //       navigate("/login", { state: { from: location } });
    //     }
    //   });
    // }
  };
  return (
    <PhotoProvider>
      <div className="w-80 h-96 bg-base-100 shadow-xl relative mt-2 overflow-y-hidden">
        <div className="h-56">
          <PhotoView src={product?.img[0].img1st}>
            <img
              src={product?.img[0].img1st}
              alt="Shoes"
              className="w-full h-full object-contain p-5"
            />
          </PhotoView>
        </div>
        <div className="flex-grow-0 px-3 py-2 ">
          <div className="flex justify-between">
            {" "}
            {product?.name?.length > 26 ? (
              <p className="text-[18px]">
                {product?.name.slice(0, 26) + "..."}
              </p>
            ) : (
              <p className="text-[18px]">{product?.name}</p>
            )}
            {/* {product?.name} */}
          </div>
          <div className="flex justify-between text-center">
            <div className="flex align-middle justify-items-center">
              <Star ratingPoint={product?.rating} />
            </div>
            {product?.stock == "Out of Stock" ? (
              <div className="badge bg-red-600 text-white">
                {product?.stock}
              </div>
            ) : (
              <div className="badge bg-green-600 text-white">
                {product?.stock}
              </div>
            )}
          </div>
          <p className="font-semibold text-[#F88E1A]">
            Price: $ {product?.price}
          </p>

          {/* {description.length > 70 ? (
            <p className="text-[14px]">{description.slice(0, 70) + "..."}</p>
          ) : (
            <p className="text-[14px]">{description}</p>
          )} */}

          <div className="card-actions justify-between">
            <Link href={`/shop/${product?._id}`}>
              <button className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3">
                View Detail
              </button>
            </Link>
            <button
              onClick={() => handleAddToCart(product)}
              className="an border bg-[#F88E1A] rounded-none !px-3 py-1  ml-3 hover:bg-[#bf680a] !text-white my-3 flex items-center gap-3"
            >
              Add Cart <AiOutlineShoppingCart />
            </button>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ShopCard;
