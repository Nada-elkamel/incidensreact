import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addProblem.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddProblem = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateCreation = new Date();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('dateCreation', dateCreation);
    formData.append('developer', 2);

    axios
      .post('http://127.0.0.1:8000/problem', formData)
      .then((response) => {
        console.log(response.data);
        // Show success alert
        Swal.fire({
          icon: 'success',
          title: 'Problem Saved',
          text: 'The problem has been saved successfully!',
        }).then(() => {
          // Redirect to the problem list
          navigate('/listProblem');
        });
      })
      .catch((error) => {
        console.error(error);
        // Handle error if needed
      });
  };

  return (
    <div className="container">
      <h2 className="my-4">Ask a question</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content" className="form-label">
            Content:
          </label>
          <textarea
            className="form-control"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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

export default AddProblem;
