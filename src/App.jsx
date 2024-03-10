import React from "react";
import AuthenticatedApp from "./AuthenticatedApp";
import UnauthenticatedApp from "./UnauthenticatedApp";
import "./App.scss";

import useToken from "./Components/Hooks/useToken";

function App() {

  const [setIsLoggedIn] = useToken()

  if(setIsLoggedIn) {
    return <AuthenticatedApp />
  }else {
    return <UnauthenticatedApp />
  }
}

export default App;
