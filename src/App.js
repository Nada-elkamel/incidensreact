import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProblem from './Components/addproblem';
import ProblemList from './Components/listProblem';
import Header from './Components/Header';
import Home from './Components/home';
import { Login } from '@mui/icons-material';
import ResponseList from './Components/listResponse';
import AddSolution from './Components/addSolution';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listProblem" element={<ProblemList />} />
        <Route path="/listResponse/:id" element={<ResponseList />} />
        <Route path="/addproblem" element={<AddProblem />} />
        <Route path="/addsolution/:id" element={<AddSolution />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;