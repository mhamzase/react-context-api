import './App.css';
import UsersList from './components/UsersList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />

      <h2>Users List</h2>

      <UsersList/>
    </div>
  );
}

export default App;
