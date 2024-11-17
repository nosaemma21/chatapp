import "./App.css";
import Home from "./pages/home/Home";

import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";

function App() {
  return (
    <div className="flex items-center justify-center h-screen p-4">
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
