import React from "react";

export default function BookAppointment() {
  return (
    <div className=" md:flex justify-around md:items-center md:p-6 w-full" id="Contacts">
      <div className="mt-16">
        <div className="p-2 flex flex-col items-center justify-center md:items-start">
          <h3 className="text-secondary font mt-2">Book Now</h3>
          <h1 className="md:text-white font-black md:text-4xl">
            Book your Appointment Online.
          </h1>
          <p className=" mt-2 md:text-white text-center">
            Get 10% Discount on your first hair cut by using our website.
          </p>
          <button className="bg-secondary p-2 px-6 mt-2 md:text-white">
            Book Appointment
          </button>
        </div>
      </div>
      <div className="flex mt-6 flex-col items-center gap-6">
        <div className="md:bg-white md:h-64 md:w-64 flex mt-6 flex-col items-center p-10">
          <div className="h-fit bg-white p-4 rounded-full">
            <img src="https://img.icons8.com/ios-filled/50/null/phone.png" />
          </div>
          <h3 className="text-xl">Call Now</h3>
          <h1 className="text-2xl">0300 7715325</h1>
        </div>
      </div>
    </div>
  );
}
