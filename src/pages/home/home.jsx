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

  return (
    <div className="grid grid-cols-3 h-screen ">
      <div className="col-span-2 border-[1px] border-black w-full ">
        <div className="flex flex-col gap-[50px] w-full">
          <div>Logo</div>
          <div className="flex flex-col items-center gap-[30px]">
            <h1 className=" text-[32px] leading-[38px] tracking-[0.27px] font-cal-sans font-bold">
              Sign in to Diprella
            </h1>
            <div className="flex gap-[10px]">
              <Button icon={<IconBrandMeta className="" />} outlined rounded />
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
            <small className="text-gray-400">or use your email account:</small>
            <div className="grid gap-2 items-stretch">
              <span className="p-float-label">
                <InputText
                  id="username"
                  aria-describedby="username-help"
                  className=""
                />
                <label htmlFor="username">Username</label>
              </span>
              <span className="p-float-label">
                <Password
                  inputId="password"
                  //   value={value}
                  //   onChange={(e) => setValue(e.target.value)}
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
              <Button label="Sign in " className="rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px]">
        2<h2>Hello, Friend!</h2>
        <div className="">
          <p>Enter your personal details</p>
          <p>and start your journey with us</p>
        </div>
        <Button label="Sign up" className="rounded-full" outlined />{" "}
      </div>
    </div>
  );
}

export default Home;
