import { useEffect, useRef, useState } from "react";
import { formatDate } from "../utils";
import { Color, User } from "../utils/interface.types";
import { Link } from "react-router-dom";
import { arrow_bold, options, view_details } from "../assets";

const TableRow = ({ item }: { item: User }) => {
  const [showMoreInfo, setShowMoreInfo] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);

  const colors: Color = {
    Inactive: "rgba(84, 95, 125, 0.1)",
    Pending: "rgba(233, 178, 0, 0.1)",
    Blacklisted: "rgba(228, 3, 59, 0.1)",
    Active: "rgba(57, 205, 98, 0.1)",
  };
  const colorsHex: Color = {
    Inactive: "#545F7D",
    Pending: "#E9B200",
    Blacklisted: "#E4033B",
    Active: "#39CD62",
  };

  console.log(colors["Active"]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <tr key={item.id} className=" border-b max-sm:flex flex-col gap-4 w-full">
      <td className="py-6 sm:hidden flex  justify-between items-center">
        <div>
          <p className="text-sm font-normal text-[#545F7D]">{item?.name}</p>
        </div>
        <div onClick={() => setShowMoreInfo((prev) => !prev)}>
          <img src={arrow_bold} className="w-2 h-1" />
        </div>
      </td>

      <td className="py-6 max-sm:hidden">
        <div>
          <p className="text-sm font-normal text-[#545F7D]">Lendsqr</p>
        </div>
      </td>
      <td className="max-sm:hidden">
        <div>
          <p className="text-sm font-normal text-[#545F7D]">{item?.name}</p>
        </div>
      </td>
      <td className="py-6 max-sm:hidden">
        <div>
          <p className="text-sm font-normal text-[#545F7D]">{item?.email}</p>
        </div>
      </td>
      <td className="py-6 max-sm:hidden">
        <div>
          <p className="text-sm font-normal text-[#545F7D]">
            {item?.phoneNumber}
          </p>
        </div>
      </td>
      <td className="py-6 max-sm:hidden">
        <div>
          <p className="text-sm font-normal text-[#545F7D]">
            {formatDate(item?.dateJoined)}
          </p>
        </div>
      </td>
      <td className="flex py-6 max-sm:hidden  justify-between items-center w-full">
        <div
          style={{
            color: `${item?.userStatus && colorsHex[item?.userStatus]}`,
            backgroundColor: `${item?.userStatus && colors[item?.userStatus]}`,
          }}
          className="px-[13px] max-sm:w-full py-2 flex justify-center rounded-full"
        >
          {item?.userStatus}
        </div>
        <div className="relative">
          <div onClick={() => setShowDropdown(true)} className="cursor-pointer">
            <img src={options} className="w-5 h-5" />
          </div>

          {showDropdown && (
            <div
              ref={dropDownRef}
              className="absolute top-0 -right-4 backdrop-blur p-5 z-50 shadow-lg rounded-[4px] w-[180px] flex flex-col gap-5"
            >
              <Link to={`/dashboard/users/${item?.id}`}>
                <p className="text-sm font-medium text-[#545F7D] flex items-center gap-2">
                  <span>
                    <img src={view_details} className="w-4 h-4" />
                  </span>
                  View Details
                </p>
              </Link>
              <p className="text-sm font-medium text-[#545F7D] flex items-center gap-2">
                <span>
                  <img src={view_details} className="w-4 h-4" />
                </span>
                Blacklist User
              </p>
              <p className="text-sm font-medium text-[#545F7D] flex items-center gap-2">
                <span>
                  <img src={view_details} className="w-4 h-4" />
                </span>
                Activate User
              </p>
            </div>
          )}
        </div>
      </td>
      {showMoreInfo && (
        <>
          <td className="py-2 max-sm:flex flex-row-reverse justify-between items-center">
            <div>
              <p className="text-sm font-normal text-[#545F7D]">Lendsqr</p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:hidden text-[#545F7D]">
                ORGANIZATION
              </p>
            </div>
          </td>
          <td className="max-sm:hidden">
            <div>
              <p className="text-sm font-normal text-[#545F7D]">{item?.name}</p>
            </div>
          </td>
          <td className="py-2 max-sm:flex flex-row-reverse justify-between items-center">
            <div>
              <p className="text-sm font-normal text-[#545F7D]">
                {item?.email}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:hidden text-[#545F7D]">
                EMAIL
              </p>
            </div>
          </td>
          <td className="py-2 max-sm:flex flex-row-reverse justify-between items-center">
            <div>
              <p className="text-sm font-normal text-[#545F7D]">
                {item?.phoneNumber}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:hidden text-[#545F7D]">
                PHONE NUMBER
              </p>
            </div>
          </td>
          <td className="py-2 max-sm:flex flex-row-reverse justify-between items-center">
            <div>
              <p className="text-sm font-normal text-[#545F7D]">
                {formatDate(item?.dateJoined)}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold sm:hidden text-[#545F7D]">
                DATE JOINED
              </p>
            </div>
          </td>
          <td className="flex py-2  justify-between items-center w-full">
            <div
              style={{
                color: `${item?.userStatus && colorsHex[item?.userStatus]}`,
                backgroundColor: `${
                  item?.userStatus && colors[item?.userStatus]
                }`,
              }}
              className="px-[13px] max-sm:w-full py-2 flex justify-center rounded-full"
            >
              {item?.userStatus}
            </div>
            <div className="relative">
              <div
                onClick={() => setShowDropdown(true)}
                className="cursor-pointer"
              >
                <img src={options} className="w-5 h-5" />
              </div>

              {showDropdown && (
                <div
                  ref={dropDownRef}
                  className="absolute top-0 -right-4 backdrop-blur p-5 z-50 shadow-lg rounded-[4px] w-[180px] flex flex-col gap-5"
                >
                  <Link to={`/dashboard/users/${item.id}`}>
                    <p className="text-sm font-medium text-[#545F7D] flex items-center gap-2">
                      <span>
                        <img src={view_details} className="w-4 h-4" />
                      </span>
                      View Details
                    </p>
                  </Link>
                  <p className="text-sm font-medium text-[#545F7D] flex items-center gap-2">
                    <span>
                      <img src={view_details} className="w-4 h-4" />
                    </span>
                    Blacklist User
                  </p>
                  <p className="text-sm font-medium text-[#545F7D] flex items-center gap-2">
                    <span>
                      <img src={view_details} className="w-4 h-4" />
                    </span>
                    Activate User
                  </p>
                </div>
              )}
            </div>
          </td>
        </>
      )}
    </tr>
  );
};

export default TableRow;
