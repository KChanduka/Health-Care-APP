import React from "react";
import Navbar2 from "../components/Navbar2";
import UserBubble from "../components/UserBubble";
import user from "../assets/user.png";
import DocPoster from "../components/DocPoster";
import register from "../assets/Register.png";
import Footer from "../components/Footer";

function Register() {
  const userName = "Rose";
  const HelloUserName = `Hello, ${userName} !`;
  const userImg = user; // pass the users image path here
  return (
    <div>
      <Navbar2 />
      <UserBubble
        HelloUserName={null}
        /*pass HelloUserName here*/ userImg={null} /*pass userImg here*/
      />

      {/* Doctor Poster */}
      <div className="mt-[200px]">
        <DocPoster
          title1="Consult a specialist Doctor"
          title2="Securly and Privately"
        />
      </div>

      {/* register form */}
      <div className="bg-teal-200 bg-opacity-40 rounded-2xl m-20 justify-evenly border-emerald-500 pb-12">
        <div className="items-center">
          <h1 className="text-3xl font-semibold pt-10">Register With Us!</h1>
          <h1 className="text-3xl my-8">Your information is safe with us</h1>
          <div className="flex justify-center py-10">
            <img className="w-[400px]" src={register} alt="no internet" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-4">
         
            <div className="flex flex-col gap-4">
              <input
                class="bg-zinc-400 opacity-80 rounded-lg p-2 text-white placeholder-white w-[800px]"
                name="RegName"
                type="text"
                placeholder="Enter your Full Name"
              />
              <input
                class="bg-zinc-400 opacity-80 rounded-lg p-2 text-white placeholder-white"
                name="RegEmail"
                type="text"
                placeholder="Enter your Email"
              />
              <input
                class="bg-zinc-400 opacity-80 rounded-lg p-2 text-white placeholder-white"
                name="RegPassword"
                type="text"
                placeholder="Enter your Password"
              />
              <input
                class="bg-zinc-400 opacity-80 rounded-lg p-2 text-white placeholder-white"
                name="RegConfirmPassword"
                type="text"
                placeholder="Confirm your Password"
              />
            </div>
            <div className=" justify-center">
              <button className="bg-teal-600 text-white rounded-lg p-2 w-52 h-16 text-2xl">
                Sign Up
              </button>
              <div className="flex justify-center mt-4">
                <h1 className="text-emerald-600">Already have an account? </h1>
                <a href="#"><h1 className="text-teal-900 mx-3"> Sign In</h1></a>
              
              </div>
            </div>
          </div>
        </div>
      </div>

        {/* Footer */}
        <Footer />
    </div>
  );
}

export default Register;
