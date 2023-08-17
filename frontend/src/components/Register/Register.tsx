import React from "react";
import styles from "./Register.module.css";
import { ZodType, date, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../services/api";

const Register = () => {
  type FormData = {
    birthDate: string;
    userName: string;
    pass: string;
    confirmPass: string;
    email: string;
  };

  const schema: ZodType<FormData> = z
    .object({
      birthDate: z.string().min(1, { message: "Birth-date field is required" }),
      userName: z
        .string()
        .min(3, { message: "Username must contain at least 3 character(s)" })
        .max(20, { message: "Username must contain at most 20 character(s)" }),
      pass: z
        .string()
        .min(6, { message: "Password must contain at least 6 character(s)" }),
      confirmPass: z.string(),
      email: z.string().email(),
    })
    .refine((data) => data.pass == data.confirmPass, {
      message: "Passwords don't match",
      path: ["confirmPass"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const submitData = (data: FormData) => {
    api
      .post("submitted/", {
        birth_date: data.birthDate,
        username: data.userName,
        password: data.pass,
        email: data.email,
      })
      .then((res) => console.log(res.data));
  };

  const datePickerId = new Date().toISOString().split("T")[0];

  return (
    <div className="my-5">
      <h2 className="text-center">Register your account</h2>
      <div className="d-flex justify-content-center">
        <form
          className="rounded border border-info"
          onSubmit={handleSubmit(submitData)}
          style={{
            backgroundColor: "#050100",
            margin: "30px",
            padding: "20px",
            width: "400px",
            fontSize: "15px",
          }}
        >
          <div className="my-3 mx-3 form-group">
            <label className="text-start">
              Birth-date: <br></br>
              <input
                className="form-control my-2"
                type="date"
                min="1900-01-01"
                max={datePickerId}
                {...register("birthDate")}
              />
              {errors.birthDate && (
                <span className="text-danger">{errors.birthDate.message}</span>
              )}
            </label>
          </div>

          <div className="my-3 form-group text-center">
            <label className="text-start">
              Username:
              <br />
              <input
                className="form-control my-2"
                type="text"
                placeholder="Jacob77"
                size={36}
                {...register("userName")}
              />
              {errors.userName && (
                <span className="text-danger">{errors.userName.message}</span>
              )}
            </label>
          </div>

          <div className="my-3 form-group text-center">
            <label className="text-start">
              Password: <br></br>
              <input
                className="form-control my-2"
                type="password"
                placeholder="Enter password"
                size={36}
                {...register("pass")}
              />
              {errors.pass && (
                <span className="text-danger">{errors.pass.message}</span>
              )}
            </label>
          </div>

          <div className="my-3 form-group text-center">
            <label className="text-start">
              Confirm password: <br></br>
              <input
                className="form-control my-2"
                type="password"
                placeholder="Re-type password"
                size={36}
                {...register("confirmPass")}
              />
              {errors.confirmPass && (
                <span className="text-danger">
                  {errors.confirmPass.message}
                </span>
              )}
            </label>
          </div>
          <div className="my-2 form-group text-center">
            <label className="text-start">
              Email: <br></br>
              <input
                className="form-control my-2"
                type="email"
                placeholder="example@gmail.com"
                size={36}
                {...register("email")}
              />
              {errors.email && (
                <span className="text-danger">{errors.email.message}</span>
              )}
            </label>
          </div>
          <center>
            <button
              type="submit"
              className="my-3 btn btn-success"
              style={{ width: "329.5px" }}
            >
              Submit
            </button>
          </center>
        </form>
      </div>
    </div>
  );
};

export default Register;
