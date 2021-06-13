import "./App.css";
import UsersList from "./components/UsersList";
import NavBar from "./components/NavBar";
import AddUser from "./components/AddUser";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <NavBar />

        <AddUser/>

        <h2>Users List</h2>

        <UsersList />
      </UserProvider>
    </div>
  );
}

export default App;
