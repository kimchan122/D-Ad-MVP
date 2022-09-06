import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";

import Dashboard from './containers/pages/Dashboard';
import EditInfo from './containers/pages/EditInfo';
import MakeAds from './containers/pages/MakeAds';

import TopNavigationBar from './containers/pages/TopNavigationBar';
import SideNavigationBar from './containers/pages/SideNavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';

// import { Web3ReactProvider } from "@web3-react/core";
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from "@ethersproject/providers";
import MetamaskProvider from "./functions/MetamaskProvider";
import { isMobile } from 'react-device-detect';
import { BrowserView, MobileView } from 'react-device-detect';
import MobileBottomNavigationBar from './containers/pages_mobile/MobileBottomNavigationBar';
import MobileTopNavigationBar from './containers/pages_mobile/MobileTopNavigationBar';
import MobileDashboard from './containers/pages_mobile/MobileDashboard';
import MobileMakeAds from './containers/pages_mobile/MobileMakeAds';
import MobileEditInfo from './containers/pages_mobile/MobileEditInfo';

const getLibrary = (provider) => new Web3Provider(provider);

function App() {
  return (
    <HashRouter classname="App" >
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
            <BrowserView>
              <SideNavigationBar />
              <div className="Contents-wrapper">
                <TopNavigationBar />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/makeads" element={<MakeAds />} />
                  <Route path="/editinfo" element={<EditInfo />} />
                </Routes>
              </div>
            </BrowserView>
            <MobileView>
              <MobileTopNavigationBar />
              <MobileBottomNavigationBar />
              <div>
                <Routes>
                  <Route path="/" element={<MobileDashboard />} />
                  <Route path="/makeads" element={<MobileMakeAds />} />
                  <Route path="/editinfo" element={<MobileEditInfo />} />
                </Routes>
              </div>
            </MobileView>
        </MetamaskProvider>
      </Web3ReactProvider>
    </HashRouter>
  );
}

export default App;
