"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// actions.
import { registerUser } from "@/actions";

// simple form validation.
const validateForm = (formData) => {
  const errors = {};

  const firstName = formData.get("firstName")?.trim();
  const lastName = formData.get("lastName")?.trim();
  const email = formData.get("email")?.trim();
  const password = formData.get("password")?.trim();

  if (!firstName) {
    errors.firstName = "First Name is required";
  }

  if (!lastName) {
    errors.lastName = "Last Name is required";
  }

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

const RegisterForm = () => {
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(false);

  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setErrors({});
    setPending(true);

    try {
      const formData = new FormData(event.currentTarget);

      const result = validateForm(formData);

      if (Object.keys(result).length > 0) {
        setErrors(result);
        return;
      }

      const created = await registerUser(formData);

      if (created) {
        router.push("/login");
      } else {
        setErrors({ common: "User already exist with this email" });
      }
    } catch (error) {
      setErrors({ common: error.message });
    } finally {
      setPending(false);
    }
  }

  return (
    <>
      {errors.common && (
        <div className="my-2 text-sm text-center text-red-500">
          {errors.common}
        </div>
      )}

      <form className="login-form" onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" id="firstName" />
          {errors.firstName && (
            <small className="text-sm text-red-500">{errors.firstName}</small>
          )}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text" name="lastName" id="lastName" />
          {errors.lastName && (
            <small className="text-sm text-red-500">{errors.lastName}</small>
          )}
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
          {errors.email && (
            <small className="text-sm text-red-500">{errors.email}</small>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
          {errors.password && (
            <small className="text-sm text-red-500">{errors.password}</small>
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
            <span>Create Account</span>
          )}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
