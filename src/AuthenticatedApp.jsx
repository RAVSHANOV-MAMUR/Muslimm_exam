import React from "react";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import AxiosApi from "./Components/Axios/Hero";
import Profile from "./Components/Axios/Profile";
import Channel from "./Components/Axios/Channel";
import Menu from "./Components/Important/Menu";
import Header from "./Components/Important/Header";
import useTheme from "./Components/Hooks/useTheme";
import Error from "./Components/Important/Error/Error"

function AuthenticatedApp() {
  const [theme] = useTheme()
  return (
    <div className={`container body${theme === "dark" ? "body--dark": ""}`} style={{ display: "flex" }}>
      <Menu />
      <div className="all">
        <Header />
        <Routes>
          <Route path="/" element={<AxiosApi/>} />
          <Route path="/home" element={<AxiosApi />} />
          <Route path="/photos/:id" element={<Profile />} />
          <Route path="/channel/" element={<Channel />} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default AuthenticatedApp;
