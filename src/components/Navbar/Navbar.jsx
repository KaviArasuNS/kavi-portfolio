import React from "react";
import "./Navbar.scss";
import { images } from "../../constants";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "@mui/material/Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <a
        href="https://drive.google.com/file/d/1J9WkLYnAKF8LEgWRJj9_TA3Us9HhpY-h/view?usp=sharing"
        rel="noreferrer"
        target="_blank"
        style={{ textDecoration: "none", marginRight: "10px" }}
      >
        <Button variant="contained">Resume</Button>
      </a>

      <a
        href="https://www.guvi.in/certificate?id=76Nr1Oq3c297387b66"
        rel="noreferrer"
        target="_blank"
        style={{ textDecoration: "none", marginRight: "10px" }}
      >
        <Button variant="contained">My Recent Certification</Button>
      </a>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transtion={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={{ item }}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
