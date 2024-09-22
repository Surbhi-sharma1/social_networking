import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

import ProfileComponent from "./pages/user-profile";
import SignupUser from "./pages/sign-up";
import { ThemeProviderComponent } from "./provider/theme/theme-provider";

function App() {
  return (
    <>
      <ThemeProviderComponent>
        <div>
          <Routes>
            <Route path="/signup" element={<SignupUser />} />
            <Route path="/home" element={<Home />} />
            <Route
              path="/profile"
              element={
                <ProfileComponent
                  name="Surbhi Sharma"
                  companyName="Sourcefuse"
                  email="surbhi@sourcefuse.com"
                />
              }
            />
          </Routes>
        </div>
      </ThemeProviderComponent>
    </>
  );
}

export default App;
