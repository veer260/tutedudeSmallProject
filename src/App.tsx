// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import Nav from "./components/navbar/Nav";
import "./App.css";
import Earning from "./components/Earnings/Earning";
import Footer from "./components/Footer/Footer";
import Working from "./components/Working/Working";
import Nav from "./components/navbar/Nav";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <div>
          <Nav />
          <div className="font-medium font-custom px-9 md:px-[187px] py-7">
            <span>UI/UX {"\u003E"} Refer & Earn</span>
          </div>
        </div>

        <div className=" p-9 bg-[#FBFBFB] md:grid grid-cols-2 gap-16 md:px-[187px]">
          <div className="relative grid grid-cols-2 gap-5 p-5 bg-white rounded-lg shadow-lg md:grid-cols-3 md:gap-x-0 gap-x-36">
            <Earning header="Referral Earning" value="2,500" space={true} />
            <Earning header="Total Referrals" value="7" space={false} />
            <Earning header="Wallet Balance" value="500" space={true} />
            <div className="flex justify-center md:col-span-3 md:my-[37px]">
              <button className="absolute md:static bottom-7 right-5  bg-[#800080] text-white font-custom px-4 py-2 rounded-full">
                Withdraw Balance
              </button>
            </div>
          </div>

          <div className=" font-custom mt-[30px]">
            <h2 className=" text-[#800080] text-xl font-semibold">
              Your Refferal Code
            </h2>
            <div className="relative mt-2 p-1 rounded-lg bg-gradient-to-r from-regal-orange to-regal-purple h-[50px]">
              <div className="absolute  font-medium rounded-lg inset-[2px] bg-white text-regal-purple  items-center px-[10px] ">
                <div className="flex items-center justify-between h-full w-[70%] mx-auto">
                  <span>E</span>
                  <span>D</span>
                  <span>C</span>
                  <span>H</span>
                  <span>5</span>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:px-[187px] bg-[#fbfbfb] px-9 ">
          <h1 className="text-[#800080] text-2xl py-5 font-bold">
            How does it work ?
          </h1>
          <Working />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
