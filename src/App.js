import Body from './components/Body';
import Navbar from './components/Navbar';
import Footar from './components/Footar';
import Navbar2 from './components/Navbar2';

import NavBar from './components/Header/NavBar'
import NavItem from './components/Header/NavItem';







import {BrowserRouter as Router } from 'react-router-dom';
import DropDownMenu from './components/Header/DropDownMenu';

function App() {
  





  return (
    <Router>
    {/* <Navbar2/>
     <Body/>
     <Footar/> */
     <NavBar>
     <NavItem icon = "👑"/>
     <NavItem icon = "⚙️"/>
     <NavItem icon = "📸"/>
     <NavItem icon = "🚀">
      <DropDownMenu/>
     </NavItem>
     </NavBar>
     
     }

    </Router>
  );
}

export default App;
