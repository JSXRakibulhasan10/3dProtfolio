import React from 'react'
import GlobE from '../components/Globe'
import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <section className='pt-10'>
      <GlobE />
      <footer className="footer">
        <div className="footer-container">
          <div className="flex flex-col justify-center">
            <p>Terms & Conditions</p>
          </div>
          <div className="socials">
            {socialImgs.map((socialImg, index) => (
              <div key={index} className="icon">
                <a 
                  href={socialImg.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-200 hover:scale-110 hover:opacity-80"
                >
                  <img 
                    src={socialImg.imgPath} 
                    alt="social icon" 
                    className="cursor-pointer"
                  />
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
              © {new Date().getFullYear()} Rakibul Hasan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;