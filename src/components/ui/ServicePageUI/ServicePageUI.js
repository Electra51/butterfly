"use client";
import { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import ServiceCard from "./ServiceCard";
import { IoMdSearch } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { RxShadowNone } from "react-icons/rx";
const ServicePageUI = ({ allService }) => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState(allService);
  const [ratingFilter, setRatingFilter] = useState("all");

  useEffect(() => {
    const filtered = allService?.filter((service) => {
      const matchesSearch = service?.name?.toLowerCase().includes(searchQuery);

      let matchesRating;
      if (ratingFilter === "all") {
        matchesRating = true; // Show all services if "All" is selected
      } else if (ratingFilter === "4") {
        matchesRating = service?.rating <= 4; // Less than or equal to 4 for "Less Than 4"
      } else if (ratingFilter === "3") {
        matchesRating = service?.rating > 4; // Greater than 4 for "More Than 4"
      } else if (ratingFilter === "2") {
        matchesRating = service?.rating < 3; // Greater than 3 for "More Than 3"
      }

      return matchesSearch && matchesRating;
    });
    setFilteredServices(filtered);
  }, [allService, searchQuery, ratingFilter]);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
  };

  const handleRatingFilterChange = (e) => {
    const selectedRating = e.target.value;
    setRatingFilter(selectedRating);
  };

  const Hair = filteredServices?.filter((item) => item.category === "Hair");
  const Nail = filteredServices?.filter((item) => item.category === "Nail");
  const Therapy = filteredServices?.filter(
    (item) => item.category === "Spa & Therapy"
  );

  return (
    <div className="max-w-6xl mx-auto mt-10">
      {/* tab */}
      <div className="flex justify-between items-start">
        <div className="flex justify-center items-center gap-5">
          <div
            className={
              toggleState == 1
                ? "bg-[#C2A74E] text-white px-4 py-1 rounded-none cursor-pointer"
                : "text-[#C2A74E] px-4 py-1 border border-[#C2A74E] rounded-none cursor-pointer"
            }
            onClick={() => toggleTab(1)}
          >
            All
          </div>

          <div
            className={
              toggleState == 2
                ? "bg-[#C2A74E] text-white px-4 py-1 rounded-none cursor-pointer"
                : "text-[#C2A74E] px-4 py-1 border border-[#C2A74E] rounded-none cursor-pointer"
            }
            onClick={() => toggleTab(2)}
          >
            Hair
          </div>

          <div
            className={
              toggleState == 3
                ? "bg-[#C2A74E] text-white px-4 py-1 rounded-none cursor-pointer"
                : "text-[#C2A74E] px-4 py-1 border border-[#C2A74E] rounded-none cursor-pointer"
            }
            onClick={() => toggleTab(3)}
          >
            Nail
          </div>
          <div
            className={
              toggleState == 4
                ? "bg-[#C2A74E] text-white px-4 py-1 rounded-none cursor-pointer"
                : "text-[#C2A74E] px-4 py-1 border border-[#C2A74E] rounded-none cursor-pointer"
            }
            onClick={() => toggleTab(4)}
          >
            Spa & Therapy
          </div>
        </div>
        <div>
          <div className="relative flex items-center w-full h-9 mr-2 bg-white overflow-hidden border border-[#C2A74E]">
            <div className="grid place-items-center h-full w-12 text-gray-300">
              <IoMdSearch className="text-[#C2A74E] font-medium text-xl" />
            </div>

            <input
              className="peer h-full w-full outline-none text-sm text-[#C2A74E] pr-2"
              type="text"
              id="search"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search Service.."
            />
          </div>

          <div className="flex justify-center items-center gap-3 mt-2 h-9">
            <p className="mb-1">Filter by Rating :</p>
            <select
              id="ratingFilter"
              name="ratingFilter"
              value={ratingFilter}
              onChange={handleRatingFilterChange}
              className="border border-[#C2A74E] rounded-none"
            >
              <option value="all">All</option>
              <option value="4">Less Than 4</option>
              <option value="3">More Than 4</option>
              <option value="2">Less Than 3</option>
            </select>
          </div>
        </div>
      </div>
      {/* content */}

      <div className={toggleState == 1 ? "text-gray-900" : "hidden"}>
        {" "}
        {filteredServices && filteredServices.length > 0 ? (
          <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
            {filteredServices?.map((e, i) => (
              <ServiceCard item={e} key={i} />
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
            <RxShadowNone />
            No products available for the selected rating or search.
          </p>
        )}
      </div>
      <div className={toggleState == 2 ? "text-gray-900" : "hidden"}>
        {filteredServices && filteredServices.length > 0 ? (
          <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
            {Hair?.map((e, i) => (
              <ServiceCard item={e} key={i} />
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
            <RxShadowNone />
            No products available for the selected rating or search.
          </p>
        )}
      </div>
      <div
        className={
          toggleState == 3
            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
            : "hidden"
        }
      >
        {" "}
        {filteredServices && filteredServices.length > 0 ? (
          <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
            {Nail?.map((e, i) => (
              <ServiceCard item={e} key={i} />
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
            <RxShadowNone />
            No products available for the selected rating or search.
          </p>
        )}
      </div>
      <div
        className={
          toggleState == 4
            ? "bg-blue-gray-500 text-gray-900 px-2 py-1 rounded"
            : "hidden"
        }
      >
        {" "}
        {filteredServices && filteredServices.length > 0 ? (
          <div className="grid grid-cols-4 gap-7 my-7 justify-items-center">
            {Therapy?.map((e, i) => (
              <ServiceCard item={e} key={i} />
            ))}
          </div>
        ) : (
          <p className="text-red-500 text-xl flex flex-col justify-center items-center my-20  gap-4">
            <RxShadowNone />
            No products available for the selected rating or search.
          </p>
        )}
      </div>
    </div>
  );
};

export default ServicePageUI;
