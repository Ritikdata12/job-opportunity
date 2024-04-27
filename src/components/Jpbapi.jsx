import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./jpbapi.css";
import { Link } from 'react-router-dom';

const JobApi = () => {
  const [jobs, setJobs] = useState([]);
  const [originalJobs, setOriginalJobs] = useState([]);
  const [employmentTypes, setEmploymentTypes] = useState("fulltime");
  const[remoteOnly,setremoteOnly] = useState("True");
  const[datePosted,setdatePosted] = useState("year");
  const [searchQuery, setSearchQuery] = useState('web developer');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(getOptions());
        console.log("jobs", response.data.jobs);
        setJobs(response.data.jobs);
        setOriginalJobs(response.data.jobs);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [employmentTypes,remoteOnly,datePosted, searchQuery]);

  const getOptions = () => {
    return {
      method: 'GET',
      url: 'https://jobs-api14.p.rapidapi.com/list',
      params: {
        query: searchQuery || 'Web Developer',
        location: 'japan',
        distance: '1.0',
        language: 'en_GB',
        remoteOnly: remoteOnly,
        datePosted: datePosted,
        employmentTypes: employmentTypes, // Join selected employment types with a semicolon
        index: '0'
      },
      headers: {
        'X-RapidAPI-Key': 'ce3246279cmsh41e236238ea5f76p1ee433jsn29ec3b492c3f',
        'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
      }
    };
  };

  const toggleEmploymentType = (employmentType) => {
      setEmploymentTypes(employmentType);
  };

  const toggleremoteonly =(remoteOnly)=>{
    setremoteOnly(remoteOnly);
  };

  const toggledatePosted =(datePosted)=>{
    setdatePosted(datePosted);
  };

  const togglerole =(searchQuery)=>{
    setSearchQuery(searchQuery);
  }


  

  console.log(originalJobs)

  return (
    <>
      <div className="box">
        <div className="filters">
          <h2>Filters</h2>
          <ul>

          <li>
  <label>Select Job Role</label>
  <div>
    <label className="container">Web 
      <input type="checkbox" checked={searchQuery === "web developer"} onClick={() => togglerole("web developer")} className='checkbox' name="searchQuery" value="web developer" />
    </label>
    <label className="container">App 
      <input type="checkbox" checked={searchQuery === "app developer"} onClick={() => togglerole("app developer")} className='checkbox' name="searchQuery" value="app developer" />
    </label>
    <label className="container">front end 
      <input type="checkbox" checked={searchQuery === "front end developer"} onClick={() => togglerole("front end developer")} className='checkbox' name="searchQuery" value="front end developer" />
    </label>
    <label className="container">graphic 
      <input type="checkbox" checked={searchQuery === "graphic designer"} onClick={() => togglerole("graphic designer")} className='checkbox' name="searchQuery" value="graphic designer" />
    </label>
  </div>
</li> 

          <li>
  <label>Date Posted:</label>
  <div>
    <label className="container">Day
      <input type="checkbox" checked={datePosted === "3days"} onClick={() => toggledatePosted("3days")} className='checkbox' name="datePosted" value="3days" />
    </label>
    <label className="container">Week
      <input type="checkbox" checked={datePosted === "week"} onClick={() => toggledatePosted("week")} className='checkbox' name="datePosted" value="week" />
    </label>
    <label className="container">Month
      <input type="checkbox" checked={datePosted === "month"} onClick={() => toggledatePosted("month")} className='checkbox' name="datePosted" value="month" />
    </label>
    <label className="container">Year
      <input type="checkbox" checked={datePosted === "year"} onClick={() => toggledatePosted("year")} className='checkbox' name="datePosted" value="year" />
    </label>
  </div>
</li> 
            
            <li>
              <label>Employment Type:</label>
              <div>
                <label className="container">Full-time
                  <input type="checkbox" checked={employmentTypes === "fulltime"} onClick={() => toggleEmploymentType("fulltime")} className='checkbox' name="employmentTypes" value="fulltime" />
                </label>
                <label className="container">Part-time  
                  <input type="checkbox" checked={employmentTypes === "parttime"} onClick={() => toggleEmploymentType("parttime")} className='checkbox' name="employmentTypes" value="parttime" />
                </label>
                <label className="container">Intern
                  <input type="checkbox" checked={employmentTypes === "intern"} onClick={() => toggleEmploymentType("intern")} className='checkbox' name="employmentTypes" value="intern" />
                </label>
                <label className="container">Contractor
                  <input type="checkbox" checked={employmentTypes === "contractor"} onClick={() => toggleEmploymentType("contractor")} className='checkbox' name="employmentTypes" value="contractor" />
                </label>
              </div>
            </li>


             


<li>
      <label>Remote Only:</label>
      <div>
        <label>
          <input type="radio" checked={remoteOnly === "True"} onClick={() => toggleremoteonly("True")} className='checkbox' name="remoteOnly" value="True" />
          <span>Yes</span>
        </label>
        <label>
          <input type="radio" checked={remoteOnly === "False"} onClick={() => toggleremoteonly("False")}  className='checkbox' name="remoteOnly" value="False" />
          <span>No</span>
        </label>
      </div>
    </li>

   

            
          </ul>
        </div>


        <div className="products">
          <h2>Products</h2>
          {jobs.map(job => (
            <div className="product-item" key={job.id}>
              <h2>{job.title}</h2>
              <p>{job.company}</p>
              <p>{job.description.split(' ').slice(0, 30).join(' ')}</p>
              <img src={job.image} className="styleimg" alt="Job" />
              <p>{job.location}</p>
              <p>{job.employmentType}</p>
              <p>{job.datePosted}</p>
              {job.salaryRange && <p>{job.salaryRange}</p>}
              <a href={job.jobProviders[0].url} target="_blank" rel="noopener noreferrer">Apply</a>
            
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
};

export default JobApi;
