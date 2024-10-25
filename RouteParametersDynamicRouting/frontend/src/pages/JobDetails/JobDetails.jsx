import React from "react";
import { useLoaderData } from "react-router-dom";
const JobDetails = () => {
  const jobDetail = useLoaderData();
  return (
    <div className="job-details">
      <p>
        <b>Job Title:</b> {jobDetail.title}
      </p>
      <p>
        <b>Salary:</b> {jobDetail.Salary}
      </p>
      <p>
        <b>Jpb Location:</b> {jobDetail.location}
      </p>
      <p>
        <b>Job Description: </b>
        In the 21st century, the internet is no more a luxury; it has rather
        become a basic necessity for our living. It is now used by school-going
        children, college students, working men and women, homemakers, elders,
        etc. We all are dependent on the internet, and the first basic amenity
        we search for in every house is an internet connection. It is now needed
        in every sector and in every home. It builds a network between every
        corner of the world. Even if you are bored or lonely, you get a thousand
        reasons not to feel bored with the internet.
      </p>
      <button>Apply Now</button>
    </div>
  );
};

export default JobDetails;

export const jobDetailsLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:5000/jobs/" + id);
  if (!res.ok) {
    throw new Error("Failed to load data");
  }
  return res.json();
};
