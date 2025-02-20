import { search } from "../assets";

const Searchbar = () => {
  return (
    <div className=" w-full px-4 h-10 sm:w-[400px] flex">
      <input
        type="text"
        placeholder="Search for anything"
        className="rounded-l-lg border border-[#545F7D] border-opacity-15 w-full py-2 px-4  focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:opacity-60"
      />
      <div className="flex justify-center items-center bg-[#39CDCC] py-[13px] px-5 rounded-r-lg ">
        <img src={search} className="w-[14px] h-[14px] object-contain" />
      </div>
    </div>
  );
};

export default Searchbar;
