import styles from "../index.module.css";
import api from "../services/api";
import SignUpInputs from "../components/FormValidation/SignUpInputs";
import { Account, RegisterData } from "../types";
import { useEffect, useState } from "react";

const Register = () => {
  const [accounts, setAccounts] = useState<Account[]>();
  useState<{ userName: string; email: string }[]>();
  const handleFormData = (data: RegisterData) => {
    api
      .post("submitted/", {
        birth_date: data.birthDate,
        username: data.userName,
        password: data.pass,
        email: data.email,
      })
      .then(() => (location.href = "/"));
  };

  useEffect(() => {
    api.get(`accounts/`).then((res) => setAccounts(res.data));
  }, []);

  const handleUsernameData = (userName: string) => {
    if (accounts != undefined) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].username == userName) {
          return false;
        }
      }
      return true;
    }

    return false;
  };

  const handleEmailData = (email: string) => {
    if (accounts != undefined) {
      for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].email == email) {
          return false;
        }
      }
      return true;
    }

    return false;
  };

  return (
    <div className={styles["container"] + " my-5"}>
      <SignUpInputs
        handleFormData={handleFormData}
        handleUsernameData={handleUsernameData}
        handleEmailData={handleEmailData}
      />
    </div>
  );
};

export default Register;
