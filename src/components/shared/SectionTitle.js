"use  client";
const SectionTitle = ({ heading }) => {
  return (
    <div className="flex justify-center items-center">
      <p className="tracking-[0.1rem] text-2xl border-b w-80 text-center font-bold text-black">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
