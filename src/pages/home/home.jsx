import { useSelector, useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth.js";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import {
  IconBrandGoogle,
  IconBrandMeta,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function Home() {
  const user = useAuth();
  console.log(user);

  return <div>home</div>;
}

export default Home;
