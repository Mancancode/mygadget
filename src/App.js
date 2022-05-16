import './App.css';
import React from 'react';

import { Header, Sidebar, Home, Posts, Users} from './components'
function App() {
  return (
    <div>
    <Header/>
    <Sidebar/>
    <Home/>
    <Posts/>
    <Users/>

    </div>
  );
}

export default App;
