/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData } from "react-router-dom";

const Jobs = () => {
  const jobsData = useLoaderData();
  return (
    <div className="jobs">
      {jobsData.map((item) => {
        return (
          <Link to={item.id.toString()} key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.location}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default Jobs;

export const jobsLoader = async () => {
  const response = await fetch("http://localhost:5000/jobs");
  if (!response.ok) {
    throw new Error("Failed to load data");
  }
  return response.json();
};
