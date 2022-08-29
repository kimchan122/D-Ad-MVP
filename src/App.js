import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from './containers/pages/Dashboard';
import EditInfo from './containers/pages/EditInfo';
import MakeAds from './containers/pages/MakeAds';

import TopNavigationBar from './containers/TopNavigationBar';
import SideNavigationBar from './containers/SideNavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';

// import { Web3ReactProvider } from "@web3-react/core";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import MetamaskProvider from "./functions/MetamaskProvider";

const getLibrary = (provider) => new Web3Provider(provider);

function App() {
  return (
    <HashRouter classname="App" >
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
          <SideNavigationBar />
          <div className="Contents-wrapper">
            <TopNavigationBar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/makeads" element={<MakeAds />} />
              <Route path="/editinfo" element={<EditInfo />} />
            </Routes>
          </div>
        </MetamaskProvider>
      </Web3ReactProvider>
    </HashRouter>
  );
}

export default App;
