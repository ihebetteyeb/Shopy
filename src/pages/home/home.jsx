import useAuth from "../../hooks/useAuth.js";
import Header from "../../components/header/header.jsx";
import Landing from "../../components/landing/landing.jsx";
import { useEffect } from "react";

function Home() {
  const { user, token } = useAuth();
  console.log(token);

  useEffect(() => {
    console.log("Home page loaded");
    console.log("User: ", token);
  }, []);

  return (
    <div>
      <Header></Header>
      <Landing></Landing>
    </div>
  );
}

export default Home;
