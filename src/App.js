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


const App = () => {
  return (
    <Router>
      <div>
        <NavigationBar />
          <Routes>
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
