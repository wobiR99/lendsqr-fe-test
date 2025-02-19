import { useNavigate } from "react-router-dom";
import { businessOptions, customerOptions, settingsOption } from "../constants";

const SideBar = () => {
  const isActive = false;
  const navigate = useNavigate();
  const users = localStorage.getItem("users");
  return (
    <nav className="shadow-lg w-[283px] max-sm:hidden relative">
      <div className="flex w-[400px] h-10 sm:hidden">
        <input
          type="text"
          placeholder="Search for anything"
          className="rounded-l-lg border border-[#545F7D] border-opacity-15 w-full py-2 px-4  focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:opacity-60"
        />
        <div className="flex justify-center items-center bg-[#39CDCC] py-[13px] px-5 rounded-r-lg ">
          <img
            src="/src/assets/search.png"
            className="w-[14px] h-[14px] object-contain"
          />
        </div>
      </div>
      <ul className="flex flex-col justify-center items-start gap-10">
        <li className="flex items-center justify-center gap-2 py-10 px-4">
          <img src="/src/assets/switch.png" className="w-[14px] h-[14px]" />
          <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
            Switch Organization{" "}
            <span>
              <img src="/src/assets/arrow.png" className="w-[14px] h-[14px]" />
            </span>
          </p>
        </li>

        <li className="flex items-center justify-center gap-2 pb-10 px-4">
          <img src="/src/assets/home.png" className="w-[14px] h-[14px]" />
          <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
            Dashboard
          </p>
        </li>
      </ul>
      <div>
        <h3 className="text-xs font-medium text-[#545F7D] py-2 px-4">
          CUSTOMERS
        </h3>
        <ul className="flex flex-col justify-center items-start">
          {customerOptions.map((item) => {
            return (
              <li
                className={`${
                  item.option === "Users"
                    ? //This default active link setting because we are dealing with Users page for the interview test
                      "bg-[#39CDCC] bg-opacity-[6%] "
                    : "opacity-60"
                } flex items-center w-full justify-start gap-2 py-2 px-4 cursor-pointer`}
              >
                <img src={item.icon} className="w-[14px] h-[14px]" />
                <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
                  {item.option}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <h3 className="text-xs font-medium text-[#545F7D] py-2 px-4">
          BUSINESSES
        </h3>
        <ul className="flex flex-col justify-center items-start">
          {businessOptions.map((item) => {
            return (
              <li
                className={`${
                  isActive ? "bg-[#39CDCC] bg-opacity-[6%] " : "opacity-60"
                } flex items-center w-full justify-start gap-2 py-2 px-4 cursor-pointer`}
              >
                <img src={item.icon} className="w-[14px] h-[14px]" />
                <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
                  {item.option}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="border-b pb-[71px]">
        <h3 className="text-xs font-medium text-[#545F7D] py-2 px-4">
          SETTINGS
        </h3>
        <ul className="flex flex-col justify-center items-start">
          {settingsOption.map((item) => {
            return (
              <li
                className={`${
                  isActive ? "bg-[#39CDCC] bg-opacity-[6%] " : "opacity-60"
                } flex items-center w-full justify-start gap-2 py-2 px-4 cursor-pointer`}
              >
                <img src={item.icon} className="w-[14px] h-[14px]" />
                <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
                  {item.option}
                </p>
              </li>
            );
          })}
        </ul>
      </div>

      <ul
        className={`${
          users !== null && "absolute bottom-[19px]"
        } flex flex-col justify-center items-start `}
      >
        <li
          className={`
           flex items-center w-full justify-start gap-2 py-2 px-4 cursor-pointer`}
          onClick={() => navigate("/")}
        >
          <img src="/src/assets/logout.png" className="w-[14px] h-[14px]" />
          <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
            Logout
          </p>
        </li>
        <li
          className={`
           flex items-center w-full justify-start gap-2 py-2 px-4 cursor-pointer`}
        >
          <p className="flex items-center justify-center gap-2 text-xs text-[#213F7D] ">
            v1.2.0
          </p>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
