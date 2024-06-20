import { Container, Nav, Navbar } from "react-bootstrap";
import Login from "./login";
import Logout from "./logout";
import Profile from "./profile";


export default function Home() {
  return (
    <>
      <header>
        <Profile></Profile>  <Login></Login> <Logout></Logout>
      </header>
      <main>
      </main>
    </>
  );
}
