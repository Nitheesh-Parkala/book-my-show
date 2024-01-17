import React, { useState } from "react";


//HOC
import DefaultlayoutHoc from '../layout/Default.layout'

//components
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Components'
import PosterSlider from '../components/PosterSlider/PosterSlider.Components'


const HomePage = () => {
 
  const [recommendedMovies, setrecommendedMovies]= useState([]);
  
  const [premierMovies, setpremierMovies] = useState([]);

  const [onlineStreamEvents, setonlineStreamEvents] = useState([]);
  return (
    //fragments tags
    <>
      <HeroCarousel />
      <div className="container mx-auto px-4 md:px-12 my-8">
        <h1 className = "text-2xl font-bold text-gray-800 sm:ml-3 my-3">
        The Best Of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">

        <PosterSlider  title= "Recommended Movies" 
          subject="List of Recommended Movies"
          posters= {recommendedMovies}
          isDark={false}
        />
      </div>
    </>
  );
}

export default DefaultlayoutHoc(HomePage);