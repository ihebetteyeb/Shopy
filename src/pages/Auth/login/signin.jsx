// import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import SigninImg from "../../../assets/1.svg";
// import { useTestQuery } from "../../../store/state/userApiSlice.jsx";
import { useLoginMutation } from "../../../store/state/userApiSlice.jsx";
import { setCredentials } from "../../../store/state/userSlice.jsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import {
  IconBrandGoogle,
  IconBrandMeta,
  IconBrandLinkedin,
} from "@tabler/icons-react";
import { useDispatch } from "react-redux";
import signinConfig from "./signin.config.jsx";

function Home() {
  // const { data } = useTestQuery();
  const dispatch = useDispatch();
  const [login, { isLoading, data: dataLogin }] = useLoginMutation();
  // const user = useAuth();

  const singinSchema = z.object({
    email: z.string().min(1, { message: "Email is required" }).email({
      message: "Must be a valid email",
    }),
    password: z.string().min(1, { message: "Password is required" }),
  });
  const { handleSubmit, register, setValue, reset } = useForm({
    resolver: zodResolver(singinSchema),
  });

  // console.log(user);

  const handleLogin = (datas) => {
    console.log(datas);
    login(datas);
    reset();
  };

  useEffect(() => {
    if (dataLogin?.accessToken) {
      dispatch(setCredentials(dataLogin?.accessToken));
      console.log(dataLogin);
    }
  }, [dataLogin]);

  if (isLoading) {
    return <p>isLoading...</p>;
  }
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="w-full flex flex-col">
        <div>
          <img
            alt="logo"
            src="src/assets/logo-no-background.png"
            width="90"
            className="mr-2 mt-2"
          />
        </div>
        <div className="flex flex-col gap-[50px] w-full h-full justify-center ">
          <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col items-center gap-[30px] justify-center">
              <h1 className=" text-[48px] leading-[38px] tracking-[0.27px] font-cal-sans font-bold text-[#91CD32]">
                Sign in to Shopy
              </h1>
              <div className="flex gap-[10px]">
                <Button
                  icon={<IconBrandMeta className="border-black" />}
                  outlined
                  rounded
                  style={{
                    background: "white",
                    borderColor: "#BDBDBD",
                    color: "#000000",
                  }}
                />
                <Button
                  icon={<IconBrandGoogle className="" />}
                  outlined
                  rounded
                  style={{
                    background: "white",
                    borderColor: "#BDBDBD",
                    color: "#000000",
                  }}
                />
                <Button
                  icon={<IconBrandLinkedin className="" />}
                  rounded
                  outlined
                  style={{
                    background: "white",
                    borderColor: "#BDBDBD",
                    color: "#000000",
                  }}
                />
              </div>
              <small className="text-gray-400">
                or use your email account:
              </small>
              <div className="grid gap-[30px] items-stretch">
                <span className="p-float-label">
                  <InputText
                    id="username"
                    aria-describedby="username-help"
                    className=""
                    {...register("username")}
                  />
                  <label htmlFor="username">Username</label>
                </span>
                <span className="p-float-label">
                  <Password
                    id="password"
                    onChange={(e) => setValue("password", e.target.value)}
                    feedback={false}
                    tabIndex={1}
                  />
                  <label htmlFor="password">Password</label>
                </span>
              </div>
              <div className="flex flex-col gap-[3px]">
                <small className="font-semibold font-inter">
                  Forgot your password?
                </small>
                <div className="border-[1px]" />
              </div>
              <div>
                <Button
                  type="submit"
                  label="Sign in "
                  className="rounded-full w-[200px] "
                  style={{
                    color: "white",
                    backgroundColor: "#91CD32",
                    borderColor: "#91CD32",
                  }}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-[30px] h-fill bg-[#DEEBFF]">
        {/* 2<h2>Hello, Friend!</h2> */}
        <img src={SigninImg} className="h-full " />
        {/* <div className="">
          <p>Enter your personal details</p>
          <p>and start your journey with us</p>
        </div> */}
        {/* <Button label="Sign up" className="rounded-full" outlined />{" "} */}
      </div>
    </div>
  );
}

export default Home;
