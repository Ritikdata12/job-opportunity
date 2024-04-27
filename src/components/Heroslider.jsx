import React from 'react'
import "./HeroSlider.css";
import Imagegallery from '../Imagegallary';

const Heroslider = () => {
  return (
    <>
    <div className='boundry'>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner " >
    <div className="carousel-item active">
      <img className="imgg" src="https://c4.wallpaperflare.com/wallpaper/994/253/68/japan-mountains-mount-fuji-asian-architecture-wallpaper-preview.jpg" alt="First slide"/>
    </div>
    <div className="carousel-item">
      {/* <img className="imgg" src="https://th.bing.com/th/id/OIP.m7LekAVBdsITU2Rb0BCdzwHaDb?w=403&h=162&c=7&r=0&o=5&pid=1.7" alt="Second slide"/> */}
      <img className='imgg' src="https://unsplash.com/photos/BjJP2TN8WoI/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTF8fGphcGFuJTIwam9icyUyMGltYWdlc3xlbnwwfHx8fDE3MTM4OTQ5Mjh8MA&force=true" />
    </div>
    <div className="carousel-item">
      <img className="imgg" src="https://imgcp.aacdn.jp/img-a/1200/auto/global-aaj-front/article/2016/04/570ffb54d4021_570ffb308c3a7_1229881063.png" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>

<Imagegallery/>
</>
  )
}

export default Heroslider