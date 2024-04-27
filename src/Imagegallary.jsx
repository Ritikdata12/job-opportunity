import React, { useEffect } from 'react';
import "./Imagegallary.css";

import j1 from "../src/assets/j1.jpg";
import j2 from "../src/assets/j2.jpg";
import j3 from "../src/assets/j3.jpg";
import j4 from "../src/assets/j4.jpg";
import j5 from "../src/assets/j5.jpg";
import j6 from "../src/assets/j6.jpg";
import j7 from "../src/assets/j7.jpg";
import j8 from "../src/assets/j8.jpg";
import j9 from "../src/assets/j9.jpg";

import Jobpart from '../src/components/Jobpart.jsx';


const Imagegallery = () => {
  useEffect(() => {
    const images = document.querySelectorAll('.image');
    const popup = document.querySelector('.popup');
    const closeBtn = document.querySelector('.close-btn');
    const imageName = document.querySelector('.image-name');
    const LargeImage = document.querySelector('.large-image');
    const imageIndex = document.querySelector('.index');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let index = 0;

    const updateImage = (i) => {        
      let path = [j1, j2, j3, j4, j5, j6,j7,j8,j9][i]; // Update image source paths
      LargeImage.src = path;
      imageName.innerHTML = `img.${i + 1}`; // Update image name
      imageIndex.innerHTML = `0${i + 1}`;
      index = i;
    };

    images.forEach((item, i) => {
      item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.add('active'); // Use add() method to add 'active' class
      });
    });

    closeBtn.addEventListener('click', () => {
      popup.classList.remove('active'); // Use remove() method to remove 'active' class
    });

    leftArrow.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior
      if (index > 0) {
        updateImage(index - 1);
      }
    });

    rightArrow.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default behavior
      if (index < images.length - 1) {
        updateImage(index + 1);
      }
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      images.forEach((item) => {
        item.removeEventListener('click', () => {
          updateImage(i);
          popup.classList.add('active');
        });
      });

      closeBtn.removeEventListener('click', () => {
        popup.classList.remove('active');
      });

      leftArrow.removeEventListener('click', () => {
        if (index > 0) {
          updateImage(index - 1);
        }
      });

      rightArrow.removeEventListener('click', () => {
        if (index < images.length - 1) {
          updateImage(index + 1);
        }
      });
    };
  }, []);

  return (
    <>
    <section id='abc'>
    <h2 className='hh'>Image gallery section</h2>
      <div className="popup">
        <div className="top-bar">
          <p className="image-name">img.1</p>
          <span className="close-btn"></span>
        </div>
        <button className="arrow-btn left-arrow"><img src="https://th.bing.com/th/id/OIP.RpuO0VQDPivWn8MlB9G8GwHaGW?rs=1&pid=ImgDetMain" alt="left" className="arrows-img"/></button>
        <button className="arrow-btn right-arrow"><img src="https://flyclipart.com/thumb2/right-arrow-angle-of-two-shapes-png-icon-free-download-241720.png" alt="right" className="arrows-img"/></button>
        <img src="" className="large-image" alt=""/>
        <h1 className="index">01</h1>
      </div>
      <div className="gallery">
        <div className="gallery-image">
          <img src={j1} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j2} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j3} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j4} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j5} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j6} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j7} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j8} className="image" alt=""/>
        </div>
        <div className="gallery-image">
          <img src={j9} className="image" alt=""/>
        </div>
      </div>
      <div className='spouce'>

      </div>
      </section>

      <Jobpart/>
    </>
  );
};

export default Imagegallery;
