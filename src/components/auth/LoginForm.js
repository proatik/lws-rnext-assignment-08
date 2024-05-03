"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// actions.
import { performLogin } from "@/actions";

// custom hooks.
import { useAuth } from "@/hooks/useAuth";

// basic form validation.
const validateForm = (formData) => {
  const errors = {};

  const email = formData.get("email")?.trim();
  const password = formData.get("password")?.trim();

  if (!email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!password) {
    errors.password = "Password is required";
  } else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(false);

  const router = useRouter();
  const { setAuth } = useAuth();

  async function onSubmit(event) {
    event.preventDefault();
    setErrors({});
    setPending(true);

    try {
      const formData = new FormData(event.currentTarget);

      const result = validateForm(formData);

      if (Object.keys(result).length) {
        setErrors(result);
        return;
      }

      const user = await performLogin(formData);

      if (user) {
        setAuth(user);
        router.push("/");
      } else {
        setErrors({ common: "Please provide valid login credentials" });
      }
    } catch (error) {
      setErrors({ common: error.message });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {errors?.common && (
        <div className="my-2 text-sm text-center text-red-500">
          {errors?.common}
        </div>
      )}

      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
          {errors?.email && (
            <small className="text-sm text-red-500">{errors?.email}</small>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          {errors?.password && (
            <small className="text-sm text-red-500">{errors?.password}</small>
          )}
        </div>
        <button
          type="submit"
          disabled={pending}
          className="flex items-center justify-center bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4 disabled:opacity-80 disabled:cursor-not-allowed"
        >
          {pending ? (
            <span className="inline-block w-5 h-5 border-4 border-orange-500 rounded-full animate-spin border-x-white"></span>
          ) : (
            <span>Login</span>
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
