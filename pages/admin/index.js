import { auth } from "@/utils/firebase";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (currenuser) => {
      if (currenuser != null) router.push("/admin/Main");
    });
  }, []);
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[600px] h-[400px] bg-white drop-shadow-xl border rounded-xl flex flex-col items-center justify-center gap-5">
        <h1 className="text-[40px] font-Comfortaa text-gray-600">
          Admin login
        </h1>
        <input
          type="email"
          className="w-[80%] h-[40px] border rounded-full p-5"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="w-[80%] h-[40px] border rounded-full p-5"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-[150px] h-[40px] bg-green-500 text-white rounded-full duration-300 hover:scale-110"
          onClick={async () => {
            await signInWithEmailAndPassword(auth, email, password)
              .then(() => router.push("/admin/Main"))
              .catch((err) => {
                alert(err.message);
              });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default index;
