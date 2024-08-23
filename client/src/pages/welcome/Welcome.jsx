import React from "react";
import WeclomePage from "../../assets/screen.png";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div>
      <div className="flex justify-center pt-10">
        <img src={WeclomePage} />
      </div>
      <div className="text-2xl font-semibold">
        <div className="flex justify-center">Discover the Right</div>{" "}
        <div className="flex justify-center text-blue-500">
          workout & Sports Club
        </div>
      </div>
      <div className="pt-2 flex justify-center text-wrap p-2 text-gray-400">
        Contrary to popular belief, Lorem Ipsum is
      </div>
      <div className="flex justify-center pt-2">
        <Link to="/onboarding">
          <button className="bg-blue-500 p-3 w-72 rounded-full flex justify-center font-bold text-white">
            Let's Get Started
          </button>
        </Link>
      </div>
      <div className="flex justify-center pt-2">
        Already have an account?
        <Link to="/login">
          <p className="text-blue-500 font-medium">Sign In</p>
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
