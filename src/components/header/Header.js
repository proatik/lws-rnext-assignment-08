"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

// icons/images.
import Logo from "/public/logo.png";

// custom hooks.
import { useAuth } from "@/hooks/useAuth";

useAuth;

const Header = () => {
  const pathname = usePathname();
  const { auth, logout } = useAuth();

  return (
    <nav>
      <div className="container flex justify-between py-6">
        <Link href="/">
          <Image
            alt="logo"
            src={Logo}
            className="object-cover w-auto h-[40px]"
          />
        </Link>

        <ul className="flex gap-4 text-sm text-gray-500">
          <li className={`py-2 ${pathname === "/" && "active"}`}>
            <Link href="/">Home</Link>
          </li>
          <li className="py-2">
            <Link href="/">Recipe</Link>
          </li>
          <li className="py-2">
            <Link href="/">About us</Link>
          </li>
          {Boolean(auth) ? (
            <li
              onClick={logout}
              className="content-center px-6 py-2 text-white rounded-md cursor-pointer bg-violet-600"
            >
              Logout
            </li>
          ) : (
            <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
              <Link href="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
