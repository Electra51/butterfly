"use  client";
const SectionTitle = ({ heading }) => {
  return (
    <div className="flex justify-center items-center">
      <p className="tracking-[0.2rem] text-xl border-b w-60 text-center">
        {heading}
      </p>
    </div>
  );
};

export default SectionTitle;
