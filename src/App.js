
// importing the necessary dependencies and components

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CandidatePipeline from './Pages/Pipeline/CandidatePipeline';
import JobList from './Pages/List/JobList';
import DashboardHome from './Pages/DashboardHome';
import CandidateTracker from './Pages/Tracker/CandidateTracker';
import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './Components/NavigationBar';
import Footer from './Components/Footer'
import './App.css'

// defining the functional App  and sets up the overall structure using React Router for navigation 

const App = () => {
  return (
    <Router> {/* Wrapping entire app with Router from React Router */}
      <div>
        <NavigationBar />
          <Routes> {/* creating the paths and links for each page within the app & found on Navbar */}
            <Route path="/" element={<DashboardHome />} />
            <Route path="/pipeline" element={<CandidatePipeline />} />
            <Route path="/jobs" element={<JobList />} />
            <Route path="/candidates" element={<CandidateTracker />} />
          </Routes>
      </div>
      <br></br>
      <Footer />
    </Router>
  );
};

export default App;

// exports the component making it available for used in other parts of the app