import React from "react";
import Slider from "../component/Slider";
import PopularSection from "../component/PopularSection";
import AdoptFromUs from "../component/AdoptFromUs";
import MeetVets from "../component/MeetVets";
import WinterTips from "../component/WinterTips";
import PetHeros from "../component/PetHeros";

const Home = () => {
   return (
      <div>
         <title>Home</title>
         <Slider></Slider>
         <PopularSection></PopularSection>
         <PetHeros></PetHeros>
         <MeetVets></MeetVets>
         <WinterTips></WinterTips>
         <AdoptFromUs></AdoptFromUs>
      </div>   
   );
};

export default Home;