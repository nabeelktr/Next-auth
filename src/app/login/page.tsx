"use client";

import { useRouter } from "next/navigation";
import { axios } from "axios";
import { useState } from "react";
import Link from "next/link";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};
  return (
    <div className=" flex flex-col min-h-screen justify-center items-center py-2">
      <h1>Login</h1>

      <label htmlFor="email">email</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password">password</label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />
      <button
        onClick={onLogin}
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
      >
        {/* {buttonDisabled ? "No signup" : "Signup"} */}Signup
      </button>
      <Link href="/signup">Visit Signup page</Link>
    </div>
  );
}
