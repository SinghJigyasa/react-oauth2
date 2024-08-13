
import "./App.css";
import LoginButton from "./component/login";
import LogoutButton from "./component/logout";
import Profile from "./component/Profile";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Profile /><br/>
      <LoginButton /><br/>
      <LogoutButton />
    </div>
  );
}

export default App;
