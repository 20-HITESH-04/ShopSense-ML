import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import ProfitPrediction from './components/ProfitPrediction';
import MaxProfit from './components/MaxProfit';
import Segmentation from './components/Segmentation';

function App() {
  const [selectedTab, setselectedTab] = useState("Home");

  let selectedComponent;
  switch (selectedTab) {
    case "Home":
      selectedComponent = <Home />;
      break;
    case "Dashboard":
      selectedComponent = <Dashboard/>;
      break;
    case "ProfitPrediction":
      selectedComponent = <ProfitPrediction/>;
      break;
    case "Segmentation":
      selectedComponent = <Segmentation/>;
      break;
      case "MaxProfit":
      selectedComponent = <MaxProfit></MaxProfit>
      break;
    default:
      selectedComponent = <CreatePost />;
  }

  return (
    <div className="app-container">
      <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
      <div className="content">
        <Header />
        {selectedComponent}
        <Footer />
      </div>
    </div>
  );
}

export default App;



