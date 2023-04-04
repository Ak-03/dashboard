import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="main-body">
      <div className="nav-bar">
        <Navbar />
      </div>
      <div className="container-box">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
