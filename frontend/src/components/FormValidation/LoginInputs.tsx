import { ZodType, z } from "zod";
import { LoginData } from "../../types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface Props {
  submitData: (data: LoginData) => void;
  handleValidateUsername: (userName: string) => boolean;
  handleValidatePassword: (userName: string, password: string) => boolean;
}

const LoginInputs = ({
  submitData,
  handleValidateUsername,
  handleValidatePassword,
}: Props) => {
  const schema: ZodType<LoginData> = z
    .object({
      userName: z.string(),
      pass: z.string(),
    })
    .refine((data) => handleValidateUsername(data.userName), {
      message: "Username does not exist",
      path: ["userName"],
    })
    .refine((data) => handleValidatePassword(data.userName, data.pass), {
      message: "Invalid Password",
      path: ["pass"],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <h2 className="text-center">Login to your account</h2>
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
              Username: <br></br>
              <input
                className="form-control my-2"
                type="text"
                placeholder="Username"
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
              Password:
              <br />
              <input
                className="form-control my-2"
                type="password"
                placeholder="Password"
                size={36}
                {...register("pass")}
              />
              {errors.pass && (
                <span className="text-danger">{errors.pass.message}</span>
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

export default LoginInputs;
