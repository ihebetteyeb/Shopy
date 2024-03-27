// import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth.js";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import SigninImg from "../../../assets/1.svg";
import { useTestQuery } from "../../../store/state/userApiSlice.jsx";

import {
  IconBrandGoogle,
  IconBrandMeta,
  IconBrandLinkedin,
} from "@tabler/icons-react";

function Home() {
  const { data } = useTestQuery();
  const user = useAuth();
  console.log(user);
  const { handleSubmit, register } = useForm();

  const handleLogin = () => {};

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="w-full flex flex-col justify-center">
        <form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
          <div className="flex flex-col gap-[50px] w-full ">
            {/* <div>Logo</div> */}
            <div className="flex flex-col items-center gap-[30px]">
              <h1 className=" text-[48px] leading-[38px] tracking-[0.27px] font-cal-sans font-bold text-[]">
                Sign in to Shopy
              </h1>
              <div className="flex gap-[10px]">
                <Button
                  icon={<IconBrandMeta className="border-black" />}
                  outlined
                  rounded
                />
                <Button
                  icon={<IconBrandGoogle className="" />}
                  outlined
                  rounded
                />
                <Button
                  icon={<IconBrandLinkedin className="" />}
                  rounded
                  outlined
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
                  <Password inputId="password" />
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
                  className="rounded-full w-[200px]"
                />
              </div>
            </div>
          </div>
        </form>
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
