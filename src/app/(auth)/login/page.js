import Link from "next/link";

// react components.
import LoginForm from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <main>
      <section className="grid h-screen place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="text-2xl font-bold text-center">Sign in</h4>
          <LoginForm />
          <p className="text-xs text-center text-gray-600">Or</p>
          <Link
            href="/register"
            className="block mx-auto mt-4 text-sm text-center text-gray-600 underline"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
