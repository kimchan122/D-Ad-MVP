import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from './containers/pages/Dashboard';
import EditInfo from './containers/pages/EditInfo';
import MakeAds from './containers/pages/MakeAds';

import TopNavigationBar from './containers/TopNavigationBar';
import SideNavigationBar from './containers/SideNavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';

function App() {
  return (
    <HashRouter classname="App" >
      <div>
        <TopNavigationBar />
        <SideNavigationBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/makeads" element={<MakeAds />} />
          <Route path="/editinfo" element={<EditInfo />} />
        </Routes>
      </div>

    </HashRouter>
  );
}

export default App;
