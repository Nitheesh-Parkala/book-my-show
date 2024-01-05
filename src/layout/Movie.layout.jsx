import React from 'react'
//components
import MovieNavbar from "../components/MovieNavbar.Components";

const MovielayoutHoc =
 (Component) =>
({...props}) =>{
  return (
    <div>
    <MovieNavbar />
      <Component {...props} />
      <div>Footer</div>
    </div>
  );
}

export default MovielayoutHoc;