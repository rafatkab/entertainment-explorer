import styles from "../index.module.css";
import LoginInputs from "../components/FormValidation/LoginInputs";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Account, LoginData } from "../types";

const Login = () => {
  const [accounts, setAccounts] = useState<Account[]>();

  useEffect(() => {
    api.get(`accounts/`).then((res) => setAccounts(res.data));
  }, []);

  const handleValidateUsername = (userName: string) => {
    if (accounts != undefined) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username == userName) {
          return true;
        }
      }
      return false;
    }

    return false;
  };

  const handleValidatePassword = (userName: string, password: string) => {
    if (accounts != undefined) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username == userName) {
          if (accounts[i].password == password) {
            return true;
          } else {
            return false;
          }
        }
      }
      return true;
    }

    return true;
  };

  const submitData = (data: LoginData) => {
    location.href = "/";
  };

  return (
    <div className={styles["container"] + " my-5"}>
      <LoginInputs
        submitData={submitData}
        handleValidateUsername={handleValidateUsername}
        handleValidatePassword={handleValidatePassword}
      />
    </div>
  );
};

export default Login;
