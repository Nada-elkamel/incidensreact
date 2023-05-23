import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Problem Share</h1>
      <p>Problem Share is a platform for developers to ask and answer questions related to React JS. Whether you're stuck on a bug or just need some advice, our community of developers is here to help.</p>
      <div className="button-container">
        <Link to="/listProblem" className="button">View Problem List</Link>
        <Link to="/addproblem" className="button">Ask a Question</Link>
      </div>
    </div>
  );
}

export default Home;
