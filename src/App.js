import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import DestinationsPage from './pages/DestinationsPage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ContactPage from './pages/ContactPage';
import Temple1Page from './pages/Temple1Page';
import Beach1Page from './pages/Beach1Page';
import Beach2Page from './pages/Beach2Page';
import Temple2Page from './pages/Temple2Page';
import PilikulaDetails from './pages/BlogDetails/PilikulaDetails';
import SammilanDetails from './pages/BlogDetails/SammilanDetails';
import SasihithluDetails from './pages/BlogDetails/SasihithluDetails';
import SulthanDetails from './pages/BlogDetails/SulthanDetails';
import ForumDetails from './pages/BlogDetails/ForumDetails';
import KadriDetails from './pages/BlogDetails/KadriDetails';
import CathedralDetails from './pages/BlogDetails/CathedralDetails';
import KateelDetails from './pages/BlogDetails/KateelDetails';
import PabbasDetails from './pages/BlogDetails/PabbasDetails';

import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Container className="my-4">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/temple1" element={<Temple1Page />} />
          <Route path="/beach1" element={<Beach1Page />} />
          <Route path="/beach2" element={<Beach2Page />} />
          <Route path="/temple2" element={<Temple2Page />} />

          <Route path="/blog/pilikula" element={<PilikulaDetails />} />
          <Route path="/blog/sammilan" element={<SammilanDetails />} />
          <Route path="/blog/sasihithlu" element={<SasihithluDetails />} />
          <Route path="/blog/sulthan" element={<SulthanDetails />} />
          <Route path="/blog/forum" element={<ForumDetails />} />
          <Route path="/blog/kadri" element={<KadriDetails />} />
          <Route path="/blog/cathedral" element={<CathedralDetails />} />
          <Route path="/blog/kateel" element={<KateelDetails />} />
          <Route path="/blog/pabbas" element={<PabbasDetails />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
