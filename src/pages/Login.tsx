import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isClicked, setIsClicked] = useState<Boolean>(false); //toggle visibility of password
  const navigate = useNavigate();

  function handleSubmit() {
    navigate("/dashboard/users");
  }
  return (
    <section className="flex w-screen h-screen">
      <div className="w-1/2  h-full flex flex-col gap-[139px] items-center justify-center max-sm:hidden">
        <img src="/src/assets/logo.png" className="self-start pl-[97px]" />
        <img src="/src/assets/login/loginImage.png" />
      </div>

      <div className="sm:w-1/2 w-full flex flex-col gap-16 justify-center items-center px-24 shadow-lg">
        <img src="/src/assets/logo.png" className="sm:hidden" />
        <aside className="flex flex-col gap-4 w-full justify-center items-center sm:items-start">
          <h1 className="font-bold text-[40px] text-[#213F7D] ">Welcome!</h1>
          <p className="font-normal text-[20px] text-[#545F7D] ">
            Enter details to login.
          </p>
        </aside>

        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
          <input
            type="email"
            placeholder="Email"
            className="rounded-[5px] border border-[#545F7D] border-opacity-15 w-full py-2 px-4  focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:opacity-60"
          />
          <div className="relative">
            <input
              type={`${isClicked ? "text" : "password"}`}
              placeholder="Password"
              className="rounded-[5px] border border-[#545F7D] border-opacity-15 w-full p-2 px-4  focus:outline-none placeholder:font-normal placeholder:text-sm placeholder:opacity-60"
            />
            <p
              className="font-semibold text-xs text-[#39CDCC] absolute right-4 top-3 cursor-pointer"
              onClick={() => setIsClicked((prevValue) => !prevValue)}
            >
              {!isClicked ? "SHOW" : "HIDE"}
            </p>
          </div>

          <p className="font-semibold text-xs text-[#39CDCC]  cursor-pointer">
            FORGOT PASSWORD?
          </p>

          <div>
            <button
              type="submit"
              className="bg-[#39CDCC] py-2 flex justify-center items-center text-sm  text-white w-full rounded-lg"
            >
              LOG IN
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
