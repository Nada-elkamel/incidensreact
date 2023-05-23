import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addProblem.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddSolution = () => {
  const [contentS, setContentS] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateCreation = new Date();

    const formData = new FormData();
    formData.append('contentS', contentS);
    formData.append('dateCreation', dateCreation);
    formData.append('problem', id);
    formData.append('developer', 2); // Replace with appropriate developer ID

    axios
      .post('http://127.0.0.1:8000/solution', formData)
      .then((response) => {
        console.log(response.data);
        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Solution Saved',
          text: 'The solution has been saved successfully!',
        }).then(() => {
          // Redirect to the response list
          navigate(`/listResponse/${id}`);
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Add a solution to the problem</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <textarea
            className="form-control"
            id="content"
            value={contentS}
            onChange={(e) => setContentS(e.target.value)}
            required
            rows="5"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddSolution;
