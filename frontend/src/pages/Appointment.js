import React from "react";
import Navbar2 from "../components/Navbar2";
import UserBubble from "../components/UserBubble";
import user from "../assets/user.png";
import DocPoster from "../components/DocPoster";
import welcome from "../assets/Welcome.png";
import Footer from "../components/Footer";
import ManageBookingBtn from "../components/ManageBookingBtn";


function Appointment() {
  const userName = "Rose"; 
  const HelloUserName = `Hello, ${userName} !`;
  const userImg = user; // pass the users image path here 
  return (  
      <div>
        <Navbar2 />
        <UserBubble
          HelloUserName={HelloUserName} /*pass HelloUserName here*/
          userImg={userImg} /*pass userImg here*/
        />

        {/* Doctor Poster */}
        <div className="flex relative left-[1300px] mt-24">

        <ManageBookingBtn/>

        </div>

        {/* register form */}
        <div className="bg-teal-200 bg-opacity-40 rounded-2xl m-20 justify-evenly border-emerald-500 pb-12">
          <div className="items-center">
            <h1 className="text-3xl font-semibold pt-10">Channel Your Doctor</h1>
            {/* <h1 className="text-3xl my-8">Your information is safe with us</h1> */}
            <div className="flex justify-center py-10">
              <img className="w-[400px]" src={welcome} alt="no internet" />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-8">
                <input
                  class="bg-zinc-400 opacity-80 rounded-lg p-2 text-white placeholder-white w-[800px]"
                  name="RegEmail"
                  type="text"
                  placeholder="Doctors Name"
                />
                <input
                  class="bg-zinc-400 opacity-80 rounded-lg p-2 text-white placeholder-white"
                  name="RegPassword"
                  type="text"
                  placeholder="Specifications"
                />

                {/* <a href="#">
                  <h1 className="text-emerald-600 mx-3"> Forgot Password?</h1>
                </a> */}
              </div>
              <div className=" justify-center">
                <button className="bg-teal-600 text-white rounded-lg p-2 w-52 h-16 text-2xl">
                  Channel
                </button>
                {/* <div className="flex justify-center mt-4">
                  <h1 className="text-emerald-600">Don't have an account? </h1>
                  <a href="#">
                    <h1 className="text-teal-900 mx-3"> Sign Up</h1>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
  );
}

export default Appointment;
