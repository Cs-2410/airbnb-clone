import React from "react";
import logo from "../../photos/logo/white-logo.png"
import "./index.css"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from "./profilemenu";
import SimpleBottomNavigation from "./Bottomnavigation"
import MobileSearchBar from "../mobilenavbar/mobilenavbar"
function Header(){
    return(
    <div>
       <div className="navbar">
        <MobileSearchBar />
        <img src={logo} alt="logo" className="navbar-logo" />
        
        <div className="search-bar">
          <div className="search-bar-text">Anywhere</div>
          <div className="search-bar-text">Any Week</div>
          <div className="search-bar-text2">Add guests</div>
          <div className="search-icon">
            <SearchRoundedIcon />
          </div>
        </div>

        <div className="profile-icon">
          <div className="airbnb-home">Airbnb your Home</div>
          <div className="airbnb-home">
            <LanguageRoundedIcon sx={{ fontSize: "1.3rem" }}/>
            </div>
          <div className="profile-div">
             <BasicMenu />
          </div>
        </div>
        
       
    </div>
    <div>
         
         <SimpleBottomNavigation /> 
         </div>
    </div>
    
    );
}

export default Header