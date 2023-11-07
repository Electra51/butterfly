"use client";
const ServiceCard = ({ item }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={item?.icon} />
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{item?.name}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
