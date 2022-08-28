import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";
import Dashboard from './containers/pages/Dashboard';
import TopNavigationBar from './containers/TopNavigationBar';
import SideNavigationBar from './containers/SideNavigationBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-pro-sidebar/dist/css/styles.css';

function App() {
  return (
    <HashRouter classname="App">
      <TopNavigationBar/>
      <SideNavigationBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
