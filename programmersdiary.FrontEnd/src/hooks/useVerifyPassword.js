import { useState, useEffect } from "react";

const useVerifyPassword = (defaultValue) => {
  const [password, setPassword] = useState(defaultValue);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  useEffect(() => {
    if (password) {
      const regex = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
      );
      if (regex.test(password)) {
        setPasswordIsValid(true);
      } else {
        setPasswordIsValid(false);
      }
    }
  }, [password]);

  return { password, setPassword, passwordIsValid };
};

export default useVerifyPassword;
