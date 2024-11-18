import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";

import ProfileComponent from "./pages/user-profile";
import SignupUser from "./pages/sign-up";
import { ThemeProviderComponent } from "./provider/theme/theme-provider";
import { Login } from "./pages/login";

import { Provider } from "react-redux";
import { store } from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProviderComponent>
        <div>
          <Routes>
            <Route path="/signup" element={<SignupUser />} />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/edit-profile" element={<ProfileComponent />} />
            <Route
              path="/profile"
              element={
                <ProfileComponent

                />
              }
            />
          </Routes>
        </div>
      </ThemeProviderComponent>
    </Provider>
  );
}

export default App;
