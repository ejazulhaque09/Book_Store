import "./Components/style.css";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Book Management App</h1>
      <Header/>
      <Outlet/>
    </>
  );
}
export default App;
