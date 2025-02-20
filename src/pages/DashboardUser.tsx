import { useEffect, useState } from "react";
import { User } from "../utils/interface.types";
import TableRow from "../components/TableRow";
import Pagination from "../components/Pagination";
import {
  card_active_users,
  card_users,
  filter,
  users_loans,
  users_savings,
} from "../assets";

const DashboardUser = () => {
  const header = [
    "ORGANIZATION",
    "USERNAME",
    "EMAIL",
    "PHONE NUMBER",
    "DATE JOINED",
    "STATUS",
  ];

  const [data, setData] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage: number = 10; // Number of rows per page

  const totalPages: number = Math.ceil(data?.length / rowsPerPage);

  const indexOfLastRow: number = currentPage * rowsPerPage;
  const indexOfFirstRow: number = indexOfLastRow - rowsPerPage;
  const currentRows = data?.slice(indexOfFirstRow, indexOfLastRow);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://lendsqr-fe-test-api.onrender.com/users"
        );
        const result = await response.json();
        setData(result);
        localStorage.setItem("users", JSON.stringify(result));
        setIsLoading(false);
      } catch (error: any) {
        console.error("Error fetching data:", error);
        setError(error?.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Dependency array
  console.log(data);

  if (isLoading || error) {
    return <div>{error}</div>;
  }
  return (
    <section className="flex flex-col gap-10 p-[60px] ">
      <div>
        <h1 className="text-2xl font-medium text-[#213F7D]">User</h1>
      </div>

      {/* Dummy Data for UI */}
      {/* section for cards */}
      <section className="flex flex-col sm:flex-row gap-[26px] ">
        <div className="flex  flex-col gap-[14px] pt-5 pb-[30px] px-[30px]  sm:w-[240px] w-full rounded-[4px] shadow-lg">
          <div className="rounded-full w-10 h-10  bg-[#DF18FF] bg-opacity-10 flex items-center justify-center">
            <img src={card_users} className="w-[22px] h-[22px] " />
          </div>

          <p className="text-sm font-medium text-[#545F7D] ">USERS</p>

          <p className="font-semibold text-2xl text-[#213F7D]">
            {data?.length ?? 0}
          </p>
        </div>
        <div className="flex  flex-col gap-[14px] pt-5 pb-[30px] px-[30px]  sm:w-[240px] w-full rounded-[4px] shadow-lg">
          <div className="rounded-full w-10 h-10  bg-[#5718FF] bg-opacity-10 flex items-center justify-center">
            <img src={card_active_users} className="w-[22px] h-[22px] " />
          </div>

          <p className="text-sm font-medium text-[#545F7D] ">ACTIVE USERS</p>

          <p className="font-semibold text-2xl text-[#213F7D]">
            {data?.filter((user) => user?.userStatus === "Active").length}
          </p>
        </div>
        <div className="flex  flex-col gap-[14px] pt-5 pb-[30px] px-[30px]  sm:w-[240px] w-full rounded-[4px] shadow-lg">
          <div className="rounded-full w-10 h-10  bg-[#F55F44] bg-opacity-10 flex items-center justify-center">
            <img src={users_loans} className="w-[22px] h-[22px] " />
          </div>

          <p className="text-sm font-medium text-[#545F7D] ">
            USERS WITH LOANS
          </p>

          <p className="font-semibold text-2xl text-[#213F7D]">
            {" "}
            {data?.filter((user) => user?.loanRepayment > 0).length}
          </p>
        </div>
        <div className="flex  flex-col gap-[14px] pt-5 pb-[30px] px-[30px]  sm:w-[240px] w-full rounded-[4px] shadow-lg">
          <div className="rounded-full w-10 h-10  bg-[#FF3366] bg-opacity-10 flex items-center justify-center">
            <img src={users_savings} className="w-[22px] h-[22px] " />
          </div>

          <p className="text-sm font-medium text-[#545F7D] ">
            USERS WITH SAVINGS
          </p>

          <p className="font-semibold text-2xl text-[#213F7D]">
            {" "}
            {data?.filter((user) => user?.savings > 0).length}
          </p>
        </div>
      </section>

      {/* section for table */}
      <section className="p-[30px] rounded-[4px] shadow-lg w-full ">
        <table border={1} className="w-full border-collapse">
          <thead>
            <tr className="">
              <th className="sm:hidden flex justify-between w-full">
                <div>
                  <p className="text-xs font-semibold text-[#545F7D] flex gap-[10px]">
                    USERNAME
                    <span>
                      <img src={filter} className="w-4 h-4" />
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#545F7D] flex gap-[10px]">
                    MORE INFO
                  </p>
                </div>
              </th>
              {/* <th className="sm:hidden">
                <div>
                  <p className="text-xs font-semibold text-[#545F7D] flex gap-[10px]">
                    MORE INFO
                    <span>
                      <img src="/src/assets/filter.png" className="w-4 h-4" />
                    </span>
                  </p>
                </div>
              </th> */}
              {header.map((item) => {
                return (
                  <th key={item}>
                    <div>
                      <p className="text-xs max-sm:hidden font-semibold text-[#545F7D] flex gap-[10px]">
                        {item}
                        <span>
                          <img src={filter} className="w-4 h-4" />
                        </span>
                      </p>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody>
            {currentRows?.map((item) => (
              <TableRow item={item} />
            ))}
          </tbody>
        </table>
      </section>

      {/*  Pagination */}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </section>
  );
};

export default DashboardUser;
