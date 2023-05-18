import React from "react";
import star from "../assets/star.svg";
import star_blank from "../assets/star_blank.svg";
import profile1 from "../assets/profile_icon.png";
import profile2 from "../assets/profile_icon2.png";

export default function Testimonials() {
  return (
    <div className="h-full md:flex md:p-6 md:justify-center">
      <div className="text-center md:text-left md:w-[45%] md:self-center">
        <p className="text-secondary">Testimonials</p>
        <h1 className="font-black md:text-4xl">
          What Our Clients Say About Us
        </h1>
        <p className="text-paragraph">
          Let your hairdressers do their amazing job. Trim the hair to get your
          desired look. Book appointment with us for your favorite hair Styles!
        </p>
        <button className="bg-secondary p-2 px-6 mt-2">Give Reviews</button>
      </div>

      <div className="p-6 self-center md:flex md:gap-6">
        <div className="w-full aspect-square bg-white shadow-lg mt-6 md:w-60">
          <div className="w-full flex justify-center pt-10">
            <img src={profile1} alt="" className="felx" />
          </div>

          <p className="text-paragraph text-center">
            It was an amazing experience to get services from the best in its
            profession Absolutly Enjoyed Every Second of it
          </p>

          <div className="flex justify-center mt-6 pb-4">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_blank} alt="" />
            <img src={star_blank} alt="" />
          </div>
        </div>

        <div className="w-full aspect-square bg-white shadow-lg mt-6 md:w-60">
          <div className="w-full flex justify-center pt-10">
            <img src={profile2} alt="" className="felx" />
          </div>

          <p className="text-paragraph text-center">
            It was an amazing experience to get services from the best in its
            profession Absolutly Enjoyed Every Second of it
          </p>

          <div className="flex justify-center mt-6 pb-4">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star_blank} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
