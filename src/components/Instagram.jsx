import { useState } from "react";
import insta from "../assets/insta.png";

export default function Instagram() {
  const [user, setUser] = useState(true);

  return (
    <div className="flex justify-center items-center h-[85vh]">
      <form className="border-2 border-black rounded-xl h-full mt-20 w-[30%]" action="" >

        <img className="mt-5 w-56 mx-auto" src={insta} alt="" />

        <div className="leading-8 text-center">
        {user ? "" : <input type="text"  className="w-[80%] mt-5" placeholder="Mobile number or Email" />}
        {user ? "" : <input type="text"  className="w-[80%] mt-5" placeholder="Fullname" />}
        <input type="text" className="w-[80%] mt-5" placeholder="Phone number, Username or Email" />
        <input type="text"  className="w-[80%] mt-5" placeholder="Password" />
        <button className=" bg-cyan-500 rounded text-center text-white font-bold text-xl px-4 py-2 w-[80%] mt-5">Sign in</button>
        <p className="mt-5 font-semibold"> {user ? "Don't have an account" : "Already Signed up"}?   <span className=" text-cyan-500" onClick={() => {setUser(!user);}}>{user ?"Sign up" : "Sign in"}</span></p>
        </div>
        



      </form>
    </div>
  );
}
