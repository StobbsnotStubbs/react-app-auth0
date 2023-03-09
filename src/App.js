import logo from './logo.svg';
import './App.css';
import LoginButton from './login';
import Profile from './profile';
import LogoutButton from './logout';

function App() {
  return (
<div>
  <LoginButton/>
  <LogoutButton/>
  <Profile/>
</div>
  );
}

export default App;
