import { useNavigate, useParams } from "react-router-dom";
import GeneralDetails from "../components/GeneralDetails";
import Documents from "../components/Documents";
import BankDetails from "../components/BankDetails";
import Loans from "../components/Loans";
import Savings from "../components/Savings";
import AppAndSystem from "../components/AppAndSystem";
import { useEffect, useState } from "react";
import { User } from "../utils/interface.types";
import { goback, user_placeholder } from "../assets";

const DashboardUserDetails = () => {
  const { id } = useParams();
  const [storedUsers, setStoredUsers] = useState<User[]>([]);

  const userDetails = storedUsers?.find((user) => user.id === Number(id));

  const navigate = useNavigate();
  const tabs = {
    generalDetails: { name: "General Details", component: GeneralDetails },
    documents: { name: "Documents", component: Documents },
    bankDetails: { name: "Bank Details", component: BankDetails },
    loans: { name: "Loans", component: Loans },
    savings: { name: "Savings", component: Savings },
    appAndSystems: { name: "App and Systems", component: AppAndSystem },
  };

  type TabKey = keyof typeof tabs;

  const [activeTab, setActiveTab] = useState<TabKey>("generalDetails");

  const ActiveComponent = tabs[activeTab].component;

  useEffect(() => {
    const users = localStorage.getItem("users");

    if (users) {
      setStoredUsers(JSON.parse(users));
    }
  }, []);

  return (
    <section className="w-full sm:p-[60px] p-4 sm:pb-[137px] flex flex-col gap-8">
      <p
        onClick={() => navigate(-1)}
        className="text-base hidden text-[#545F7D] sm:flex gap-3 items-center cursor-pointer"
      >
        <span>
          <img src={goback} className="w-[30px] h-[30px]" />
        </span>
        Back to Users
      </p>
      <div className="sm:hidden cursor-pointer" onClick={() => navigate(-1)}>
        <img src={goback} className="w-[30px] h-[30px]" />
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-between">
        <h3 className="text-2xl font-medium text-[#213F7D] self-center">
          User Details
        </h3>

        <aside className="flex sm:flex-row flex-col gap-5">
          <button className="py-3 px-4 text-[#E4033B] text-sm font-semibold border-[2px]  rounded-lg border-[#E4033B] ">
            BLACKLIST USER
          </button>
          <button className="py-3 px-4 text-[#39CDCC] text-sm font-semibold border-[2px]  rounded-lg border-[#39CDCC] ">
            ACTIVATE USER
          </button>
        </aside>
      </div>

      <div className="p-[30px] flex flex-col gap-[51px] pb-0 rounded-[4px] shadow-lg">
        <div className="flex flex-col sm:flex-row sm:gap-[30px] gap-0">
          <div className="flex items-center gap-5">
            <div className="rounded-full flex justify-center items-center sm:w-[100px] sm:h-[100px] w-[50px] h-[50px] bg-[#213F7D] bg-opacity-10">
              <img src={user_placeholder} className="sm:w-10 sm:h-10 w-5 h-5" />
            </div>
            <aside className="flex flex-col gap-[10px]">
              <h4 className="sm:text-[22px] text-sm text-[#213F7D] font-medium">
                {userDetails?.name}
              </h4>
              <p className="text-sm font-medium text-[#545F7D] ">LSQFf587g90</p>
            </aside>
          </div>
          <div className="flex gap-[30px] max-sm:justify-between">
            <div className="flex flex-col gap-[10px] sm:border-x-[2px] py-[19px] px-[30px]">
              <p className="text-sm font-medium text-[#545F7D] ">User's Tier</p>
              <div className="flex gap-1">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.98572 1.28751C7.85197 1.29314 7.73572 1.38126 7.69447 1.50876L6.18759 6.17996L1.28071 6.16996C1.14196 6.16996 1.01821 6.25934 0.975716 6.39121C0.932591 6.52371 0.980091 6.66809 1.09259 6.74996L5.06891 9.62676L3.54203 14.293C3.49891 14.4249 3.54578 14.5699 3.65828 14.6511C3.77016 14.733 3.92265 14.733 4.03454 14.6511L7.9995 11.758L11.9657 14.6511C12.0776 14.733 12.2301 14.733 12.342 14.6511C12.4545 14.5699 12.5014 14.4249 12.4582 14.293L10.9314 9.62676L14.9077 6.74996C15.0202 6.66809 15.0677 6.52371 15.0246 6.39121C14.9814 6.25933 14.8583 6.16996 14.7196 6.17059L9.81269 6.18059L8.30393 1.50939V1.50876C8.25956 1.37188 8.12957 1.28188 7.98581 1.28751L7.98572 1.28751Z"
                    fill="#E9B200"
                  />
                </svg>

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5530_1562)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                      fill="#E9B200"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5530_1562">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5530_1562)">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.98439 0.959992C7.85189 0.966867 7.73688 1.05437 7.69563 1.18062L6.08939 5.99998H0.945073V6.0006C0.806948 6.0006 0.684449 6.08935 0.641953 6.2206C0.598828 6.35185 0.645078 6.49561 0.755703 6.5781L4.93442 9.63379L3.32818 14.6213V14.6207C3.28506 14.7532 3.33256 14.8976 3.44506 14.9788C3.55756 15.0607 3.70943 15.0601 3.82131 14.9782L8.00003 11.9225L12.1788 14.9782C12.2906 15.0601 12.4425 15.0607 12.555 14.9788C12.6675 14.8976 12.715 14.7532 12.6719 14.6207L11.0656 9.63316L15.2444 6.57748V6.5781C15.355 6.49561 15.4012 6.35185 15.3581 6.2206C15.3156 6.08935 15.1931 6.0006 15.055 6.0006H9.91068L8.30444 1.18124V1.18062C8.26006 1.04374 8.1288 0.953112 7.98444 0.959992H7.98439ZM8.00001 2.29374L9.37564 6.41998V6.4206C9.41814 6.55185 9.54127 6.64122 9.68001 6.6406H14.0738L10.4987 9.255V9.25563C10.3875 9.33688 10.3406 9.48062 10.3831 9.61251L11.7587 13.8807L8.1893 11.2712H8.18867C8.07617 11.1887 7.92368 11.1887 7.81117 11.2712L4.24173 13.8807L5.61736 9.61251H5.61673C5.65923 9.48063 5.61236 9.33687 5.50111 9.25563L1.92607 6.64123H6.31983V6.6406C6.45858 6.64123 6.5817 6.55185 6.6242 6.4206L7.99983 2.29436L8.00001 2.29374Z"
                      fill="#E9B200"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5530_1562">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-3">
              <p className="text-[22px] text-[#213F7D] font-medium">
                N {userDetails?.savings && Math.ceil(userDetails?.savings)}
              </p>
              <p className="text-xs font-medium text-[#213F7D]">
                {`${userDetails?.bankAccountNumber}/${userDetails?.bankName}`}
              </p>
            </div>
          </div>
        </div>

        <div className="sm:flex justify-between grid grid-cols-3 ">
          {Object.entries(tabs).map(([key, { name }]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as TabKey)}
              className={`sm:text-base text-sm p-[10px] opacity-80 ${
                activeTab === key &&
                "text-[#39CDCC]  border-b-[2px] border-[#39CDCC]"
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      {userDetails && <ActiveComponent userDetails={userDetails} />}
    </section>
  );
};

export default DashboardUserDetails;
