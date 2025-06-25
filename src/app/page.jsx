import React from "react";
import CabBookingForm from "@/components/Section/CabBookingForm";

import Homepage from "@/components/Section/Homepage";

// import HomePage from "@/components/Section/HomePageSection";
// import HomePageSection from "@/components/Section/HomePageSection";
// import Banner from "@/components/Section/Banner";
// import Destination from "@/components/Section/Destination";

const Page = () => {
  return (
    <div className="bg-blue-100/50">
      <CabBookingForm />

      <div className="bg-blue-100/50">
        <Homepage />

        {/* <HomePageSection />
        <Banner/> 
        <Destination/> */}
      </div>
    </div>
  );
};

export default Page;
