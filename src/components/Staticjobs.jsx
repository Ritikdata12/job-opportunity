import React from 'react'
import "./Staticjobs.css"
import Footer from './Footer'
const Staticjobs = () => {
  return (
    <>
  <section id="recentjobs">
    <h2 className="recent-job-heading">RECENT JOBS</h2>
    <p className="recent-job-sub-heading"></p>
    <div className='box-container'>

    {/* <!-----JOB LIST-----> */}
    <div className="bordering">
      <div className="recent-job-list">
        
        <div className="width-100">
          <h4 className="job-title">HTML Designer</h4>
          <p className="job-company">Dezven  Solution <i className="fa fa-star" aria-hidden="true"></i> | 234 Reviews </p>
        </div>

        <div className="width-33">
          <i className="fa fa-briefcase" aria-hidden="true"></i> 1 to 4 Years
        </div>
        <div className="width-33">
          <i className="fa fa-inr" aria-hidden="true"></i> No disclosed
        </div>
        <div className="width-33">
          <i className="fa fa-map-marker" aria-hidden="true"></i> Pune
        </div>
        <div className="apply">
          <p className="job-skill">
            <b>Skills : </b>HTML, CSS, JAVASCRIPT, <br/>  JQUERY, BOOTSTRAP, PHOTOSHOP
           
          </p>
          
        </div>


        <div className="apply">
          <a href="#" className="job-apply-button">Apply Now</a>
        </div>
      </div>
    </div>

   

       {/* <!-----JOB LIST------> */}
       <div className="bordering">
      <div className="recent-job-list">
        <div className="width-100">
          <h4 className="job-title">CSS Designer</h4>
          <p className="job-company">Dezven Group <i className="fa fa-star" aria-hidden="true"></i> | 234 Reviews </p>
        </div>
        <div className="width-33">
          <i className="fa fa-briefcase" aria-hidden="true"></i> 1 to 4 Years
        </div>
        <div className="width-33">
          <i className="fa fa-inr" aria-hidden="    true"></i> No disclosed
        </div>
        <div className="width-33">
          <i className="fa fa-map-marker" aria-hidden="true"></i> Pune
        </div>
        <div className="width-100">
          <p className="job-skill">
            <b>Skills : </b>HTML, CSS, JAVASCRIPT, <br/>  JQUERY, BOOTSTRAP, PHOTOSHOP
          </p>
        </div>
        <div className="apply">
          <a href="#" className="job-apply-button">Apply Now</a>
        </div>
      </div>
    </div>
   
   
    {/* <!-----JOB LIST------> */}
    <div className="bordering">
      <div className="recent-job-list">
        <div className="width-100">
          <h4 className="job-title">jQuery Developer</h4>
          <p className="job-company">Google Corporation <i className="fa fa-star" aria-hidden="true"></i> | 234 Reviews </p>
        </div>
        <div className="width-33">
          <i className="fa fa-briefcase" aria-hidden="true"></i> 1 to 4 Years
        </div>
        <div className="width-33">
          <i className="fa fa-inr" aria-hidden="true"></i> No disclosed
        </div>
        <div className="width-33">
          <i className="fa fa-map-marker" aria-hidden="true"></i> Pune
        </div>
        <div className="width-100">
          <p className="job-skill">
            <b>Skills : </b>HTML, CSS, JAVASCRIPT, <br/> JQUERY, BOOTSTRAP, PHOTOSHOP
          </p>
        </div>
        <div className="apply">
          <a href="#" className="job-apply-button">Apply Now</a>
        </div>
        </div>
        
      </div>    
    
</div>
</section>

<Footer/>
    </>
  )
}

export default Staticjobs