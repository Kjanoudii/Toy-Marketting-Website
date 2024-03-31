/* eslint-disable no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import { useRouter } from "next/navigation";

export default function Page() {
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    
    if (loggedIn) {
      router.push("/home"); 
    }
  }, [loggedIn, router]);

  

  return <>{loggedIn ? "" : <LoginForm setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}</>;
}
