import React, { useEffect, useRef, useState } from "react";
import "./styleHeader.css";
import { IoLogoSlack } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setIsClicked } from "../../Utils/ReduxTools/ReduxNexus/ReduxNavActive/ReduxNavActive";
import { NavLink } from "react-router-dom";

export const Header = () => {
  const arr = ["HOME", "CONTACT", "ABOUT US"];
  const dispatch = useDispatch();
  const { IsClicked } = useSelector((state) => state.ReduxNavActive);
  const [sliderStyle, setSliderStyle] = useState({ width: 0, left: 0 });
  const menuRef = useRef(null);
  const refsArray = useRef([]);

  const handleListClick = (index) => {
    const currentRef = refsArray.current[index];
    if (currentRef) {
      const und = currentRef.getBoundingClientRect();
      setSliderStyle({
        width: und.width,
        left: und.left - menuRef.current.getBoundingClientRect().left,
      });
      console.log(und);
    }
    dispatch(setIsClicked(index));
  };

  useEffect(() => {
    if (IsClicked !== null) {
      const activeItem = refsArray.current[IsClicked];
      if (activeItem) {
        const rect = activeItem.getBoundingClientRect();
        setSliderStyle({
          width: rect.width,
          left: rect.left - menuRef.current.getBoundingClientRect().left,
        });
      }
    }
  }, [IsClicked]);

  return (
    <header>
      <nav className="styleNav">
        <div className="styleLogo">
          <IoLogoSlack id="_logo" />
          <div id="_title">
            <h1>TREND</h1>
            <h1>SPHERE</h1>
          </div>
        </div>
        <ul className="styleMainMenu" ref={menuRef}>
          {arr.map((item, index) => (
            <li
              className={IsClicked === index ? "NavClicked" : ""}
              key={index}
              ref={(el) => (refsArray.current[index] = el)}
              onClick={() => handleListClick(index)}
            >
              {item}
            </li>
          ))}
          <div
            className="menuSlider"
            style={{ width: sliderStyle.width, left: sliderStyle.left }}
          ></div>
        </ul>
        <ul className="styleLoginMenu">
          <li>
            <NavLink to="/login">
              <button>Log In</button>
            </NavLink>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};
