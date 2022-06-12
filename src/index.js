import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProjectCards from './components/Projects/ProjectCards';
import ProjectDetail from './components/Projects/ProjectDetail';
const FourOFour = lazy(() => import('./components/FourOFour'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));
const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));
const rootElement = document.getElementById('root');
ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />}>
            <Route index element={<ProjectCards />} />
            <Route path="/projects/:projectId" element={<ProjectDetail />} />
          </Route>
          <Route path="/*" element={<FourOFour />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>,
  rootElement
);
