import React, { useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import { Card } from "primereact/card";
import { Password } from "primereact/password";
import "./login.css";
import { useLoginMutation } from "../../store/state/userApiSlice";

export default function Login() {
  const [useLogin] = useLoginMutation();
  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Form Submitted",
      detail: getValues("password", "username"),
    });
  };

  const defaultValues = {
    username: "",
    password: "",
  };

  const {
    control,
    formState: { errors },
    handleSubmit,
    getValues,
    reset,
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    console.log(data);
    let log = { userame: "bilel", password: "bilel" };
    useLogin(log);
    reset();
  };

  const getFormErrorMessage = (name) => {
    return errors[name] ? (
      <small className="p-error">{errors[name].message}</small>
    ) : (
      <small className="p-error">&nbsp;</small>
    );
  };

  return (
    <div className="flex justify-center p-20">
      <Card title="Login" className="w-2/6">
        <div className="grid flex justify-center grid-col-2 gap-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-3 col-span-2">
              <Toast ref={toast} />
              <Controller
                name="username"
                control={control}
                rules={{ required: "Username is required." }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      className={classNames({
                        "p-error": errors.value,
                      })}
                    ></label>
                    <span className="p-float-label">
                      <InputText
                        id={field.name}
                        value={field.value}
                        size={"30"}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Username</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>
            <div className="p-3 col-span-2">
              <Controller
                name="password"
                control={control}
                rules={{ required: "Password is required" }}
                render={({ field, fieldState }) => (
                  <>
                    <label
                      htmlFor={field.name}
                      className={classNames({
                        "p-error": errors.value,
                      })}
                    ></label>
                    <span className="p-float-label">
                      <Password
                        id={field.name}
                        value={field.value}
                        size={"30"}
                        feedback={false}
                        className={classNames({
                          "p-invalid": fieldState.error,
                        })}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      <label htmlFor={field.name}>Password</label>
                    </span>
                    {getFormErrorMessage(field.name)}
                  </>
                )}
              />
            </div>
            <div className="flex justify-center col-span-2 pt-2">
              <Button label="Submit" type="submit" icon="pi pi-check" />
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
