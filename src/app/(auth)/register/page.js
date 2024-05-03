import Link from "next/link";

// react components.
import RegisterForm from "@/components/auth/RegisterForm";

const RegisterPage = () => {
  return (
    <main>
      <section className="grid h-screen place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="text-2xl font-bold text-center">Sign Up</h4>
          <RegisterForm />
          <p className="text-xs text-center text-gray-600">Or</p>
          <Link
            href="/login"
            className="block mx-auto mt-4 text-sm text-center text-gray-600 underline"
          >
            Login
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RegisterPage;
