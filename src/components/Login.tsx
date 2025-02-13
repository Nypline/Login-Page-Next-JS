import Logo from "../images/logo.png";
import Image from "next/image";
export default function Login() {
  return (
    <div>
      <main className="flex flex-row">
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[97%] h-[97%] bg-gray-100 rounded-3xl "></div>
        </div>
        <div className="flex-1 h-screen flex justify-center items-center">
          <div
            className="w-[60%] h-[70%]  flex justify-between flex-col
          "
          >
            <Image src={Logo} alt="" className="w-44" />
            <div>
              <h2 className="font-semibold text-3xl">Welcome 👋</h2>
              <p className="font-light text-base text-[#A2A1A8]">
                Please login here
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col space-y-5">
                <input
                  type="email"
                  className="w-full h-14 border-blue-300 border-2 focus:border-blue-800 focus:border-2 rounded-lg p-5"
                  placeholder="Enter Your Email"
                />
                <input
                  type="password"
                  className="w-full h-14 border-blue-300 border-2 focus:border-blue-800 focus:border-2 rounded-lg p-5"
                  placeholder="Enter Your Password"
                />
              </div>
              <div>
                <button className="w-full h-14 bg-blue-800 text-white rounded-lg">
                  Login
                </button>
                <p className="text-center mt-5">
                  Don’t have an account?
                  <a href="" className="text-blue-500 mx-2">
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
