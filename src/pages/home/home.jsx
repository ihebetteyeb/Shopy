import useAuth from "../../hooks/useAuth.js";
import Header from "../../components/header/header.jsx";
import Landing from "../../components/landing/landing.jsx";

function Home() {
  const user = useAuth();
  console.log(user);

  return (
    <div>
      <Header></Header>
      <Landing></Landing>
    </div>
  );
}

export default Home;
