import { useState } from "react";
import { businessOptions, customerOptions, settingsOption } from "../constants";
import Searchbar from "./Searchbar";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const isActive = false;
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <header className="flex gap- justify-between items-center p-[30px] pr-[60px] shadow-lg relative">
      <img
        src="/src/assets/hamburger.png"
        className="h-[30px] w-[30px] sm:hidden"
        onClick={() => setShowSidebar((prev) => !prev)}
      />
      <img
        src="/src/assets/logo.png"
        className="sm:w-[145px] w-[90px] object-contain h-[30px]"
      />

      <div className="flex sm:w-full sm:ml-[60px] sm:items-center sm:justify-end sm:gap-[400px]">
        <div className="max-sm:hidden">
          <Searchbar />
        </div>
        <div className="flex gap-[47px] max-sm:hidden">
          <h3 className="underline font-normal text-base text-[#213F7D] self-center">
            Docs
          </h3>

          <aside className="flex gap-[30px]">
            <img
              src="/src/assets/bell.png"
              className="w-[26px] h-[26px] self-center"
            />
            <div className="flex gap-[10px] ">
              <img
                src="/src/assets/profile.png"
                className="w-12 h-12 rounded-full"
              />

              <small className="font-normal text-base text-[#213F7D] flex gap-1 justify-center items-center">
                Adedeji{" "}
                <span>
                  <img src="/src/assets/arrow_bold.png" className="w-2 h-1" />
                </span>
              </small>
            </div>
          </aside>
        </div>

        <div className="sm:hidden relative">
          <div className="flex items-center gap-1 ">
            <img
              src="/src/assets/profile.png"
              className={`w-8 h-8 rounded-full `}
            />
          </div>
        </div>
      </div>

      {showSidebar && (
        <nav className="shadow-lg w-[283px] flex flex-col gap-2 h-[250vh] bg-white py-4 top-0 left-0  absolute">
          <div
            className="font-semibold text-2xl cursor-pointer text-left px-4 text-[#213F7D]"
            onClick={() => setShowSidebar((prev) => !prev)}
          >
            X
          </div>
          <Searchbar />
          <ul className="flex flex-col justify-center items-start gap-10">
            <li className="flex items-center justify-center gap-2 py-10 px-4">
              <img src="/src/assets/switch.png" className="w-[14px] h-[14px]" />
              <p className="flex items-center justify-center gap-2 text-base text-[#213F7D] ">
                Switch Organization{" "}
                <span>
                  <img
                    src="/src/assets/arrow.png"
                    className="w-[14px] h-[14px]"
                  />
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

          <div>
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

          <ul className="flex flex-col justify-center items-start">
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
      )}
    </header>
  );
};

export default NavBar;
