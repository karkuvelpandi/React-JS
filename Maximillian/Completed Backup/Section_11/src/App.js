import React, { useContext } from "react";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import { AuthContext } from "./store/auth-context";

function App() {
  const context = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!context.isLoggedIn && <Login onLogin={context.onLogIn} />}
        {context.isLoggedIn && <Home onLogout={context.onLogOut} />}
      </main>
    </React.Fragment>
  );
}

export default App;
