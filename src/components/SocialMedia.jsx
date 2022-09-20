import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://github.com/kaviarasuns" target="_blank">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.twitter.com/kaviarasu_ns" target="_blank">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/kaviarasuns/" target="_blank">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
