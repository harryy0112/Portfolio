import React from "react";
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/harryy0112/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/harryy0112" target="_blank"><FaGithub/></a>
      <a href="https://www.instagram.com/x.hardik.xx/" target="_blank"><BsInstagram/></a>
    </div>
  );
};

export default HeaderSocials;
