import React from 'react';
//component
import Navbar from "../components/Navbar/Navbar.Components"
const DefaultlayoutHoc = (Component) => 
({...props})=>{
  return (
    <div>
      <Navbar />
      <Component {...props} />
      <div>Footer</div>
    </div>
  );
}

export default DefaultlayoutHoc;