import React from 'react';
import './App.css';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Chat from "./components/Chat";

function App() {
  return (
    <Router>
      <>
        <Header />
        <AppBody>
          <Sidebar />
          <Switch>
            <Route path="/" exact>
              <Chat />
            </Route>
          </Switch>

        </AppBody>

      </>
    </Router>
  );
}

const AppBody = styled.div`

  display: flex;
  height: 100vw;
  background-color: #19171d;
  
`;
export default App;
