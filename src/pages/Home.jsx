import React from "react";
import Slider from "../component/Slider";
import PopularSection from "../component/PopularSection";
import MeetVets from "../component/MeetVets";
import WinterTips from "../component/WinterTips";

const Home = () => {
   return (
      <div>
         <title>Home</title>
         <Slider></Slider>
         <PopularSection></PopularSection>
         <MeetVets></MeetVets>
         <WinterTips></WinterTips>
      </div>   
   );
};

export default Home;