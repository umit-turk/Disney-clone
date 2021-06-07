import React from "react";
import { Nav, Logo, NavMenu, UserImg } from "./headerStyle";

function Header() {
  return (
      
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
            <img src="/images/home-icon.svg" />
            <span>HOME</span>
        </a>
        <a>
            <img src="/images/search-icon.svg" />
            <span>SEARCH</span>
        </a>
        <a>
            <img src="/images/watchlist-icon.svg" />
            <span>WATCHLIST</span>
        </a>
        <a>
            <img src="/images/original-icon.svg" />
            <span>ORIGINALS</span>
        </a>
        <a>
            <img src="/images/movie-icon.svg" />
            <span>MOVIES</span>
        </a>
        <a>
            <img src="/images/series-icon.svg" />
            <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="https://scontent.fist2-4.fna.fbcdn.net/v/t1.6435-9/89462424_2638544703088801_7918040516782981120_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=OUIYDOu5d7AAX9k7Hzc&_nc_ht=scontent.fist2-4.fna&oh=6504b83653e042772d49f4897056adc3&oe=60E25170" />
    </Nav>
    
  )
}

export default Header;
