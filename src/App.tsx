import "./App.css";

import Footer from "./components/footer";
import Topbar from "./components/topbar/topbar";

import ProfileComponent from "./components/user-profile/user-profile";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
   
     
     <div><Topbar />
  <Sidebar />
     <ProfileComponent 
      
      />
     <Footer text="© 2024 Social Networking App. All rights reserved." /></div>
 
  );
}

export default App;
