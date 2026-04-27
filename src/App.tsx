import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import WhatWeDo from './WhatWeDo';
import DDReport from './pages/DDReport';
import ScamList from './pages/ScamList';
import ScammerDetails from './pages/ScammerDetails';
import TrustedSeller from './pages/TrustedSeller';
import CompanyDetails from './pages/CompanyDetails';
import Learn from './pages/Learn';
import BlogPost from './pages/BlogPost';
import Login from './pages/Login';
import Documents from './pages/Documents';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/documents" element={<Documents />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<WhatWeDo />} />
            <Route path="/scam-list" element={<ScamList />} />
            <Route path="/scam-list/:id" element={<ScammerDetails />} />
            <Route path="/dd-report" element={<DDReport />} />
            <Route path="/trusted-seller" element={<TrustedSeller />} />
            <Route path="/trusted-seller/:id" element={<CompanyDetails />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn/:id" element={<BlogPost />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
