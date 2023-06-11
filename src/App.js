import "./index.css";
import Login from "./views/Login/Login";
import { useSelector } from "react-redux";
import Sidebar from "./views/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const { auth } = useSelector((state) => state);
  return (
    <Router>
      {!auth.LoggedIn ? (
        <Login />
      ) : (
        <>
          <Sidebar />
        </>
      )}
    </Router>
  );
}

export default App;
