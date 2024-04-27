import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
  const { id } = useParams(); // Destructure 'id' from useParams
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`https://jobs-api14.p.rapidapi.com/details/${id}`, {
          headers: {
            'X-RapidAPI-Key': '65754112famshf0e83b1b627ada6p145e5bjsn07e622597123',
            'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
          }
        });
        setJobDetails(response.data.job);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching job details:', error);
        setLoading(false);
      }
    };

    fetchJobDetails(); // No need to check if 'id' is available, as it will always be available
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!jobDetails) {
    return <div>Job details not found.</div>;
  }

  return (
    <div>
      <h2>{jobDetails.title}</h2>
      <p>{jobDetails.company}</p>
      <p>{jobDetails.description.split(' ').slice(0, 30).join(' ')}</p>
      <img src={jobDetails.image} className="styleimg" alt="Job" />
      <p>{jobDetails.location}</p>
      <p>{jobDetails.employmentType}</p>
      <p>{jobDetails.datePosted}</p>
      {/* Render other job details */}
    </div>
  );
};

export default Details;
