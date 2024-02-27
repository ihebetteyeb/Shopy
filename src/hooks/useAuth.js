import { useSelector } from "react-redux";

function useAuth() {
  const userReducer = useSelector((state) => state.auth);

  return { token: userReducer.token, user: userReducer.user };
}

export default useAuth;
