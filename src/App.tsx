import "./App.css";
// import Header from "./components/header/header";
// import images from "./assets/images.png";
import Footer from "./components/footer";

// import Profile from "./components/user-profile/user-profile";
import Topbar from "./components/topbar/topbar";

import ProfileComponent from "./components/user-profile/user-profile";
import Sidebar from "./components/sidebar/sidebar";
// const theme = {
//   colors: {
//     primary: "blue",
//     secondary: "gray",
//     background: "#ffffff",
//     text: "#000000",
//   },
//   spacing: "10px",
// };
// const user = {
//   name: "Jane Doe",
//   username: "janedoe",
//   bio: "Lover of nature and coding.",
//   profilePicture: "https://via.placeholder.com/150", // Placeholder image URL
//   tweets: 1234,
//   followers: 5678,
//   following: 123,
// };
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
