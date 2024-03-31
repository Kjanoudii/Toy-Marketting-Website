import { useState } from "react";
import { Auth, googleProvider } from "../../firebase-config.js";
import { signInWithPopup } from "firebase/auth";
import SignInGoogleBtn from "../control/SignInGoogleBtn";
import Header from "../layout/Header.jsx";
export default function LoginForm({ setLoggedIn, loggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(Auth, googleProvider);
      setLoggedIn(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = () => {
    if (username && password) {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);

      setLoggedIn(true);
    } else {
      alert("Please enter both username and password.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div className="flex">
            <button
              type="submit"
              className="w-1/2 group relative flex justify-center py-2 px-4
               border border-transparent text-sm font-medium rounded-md
                text-white bg-indigo-600 hover:bg-indigo-700 
                focus:outline-none focus:ring-2 focus:ring-offset-2
                 focus:ring-indigo-500"
              onClick={handleLogin}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                {/* Heroicon name: lock-closed */}
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8V6a6 6 0 1112 0v2h1a1 1 0 011 1v8a3 3 0 01-3 3H5a3 3 0 01-3-3v-8a1 1 0 011-1h1zm10-2v2H6V6a4 4 0 118 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
            <SignInGoogleBtn
              className="w-1/2"
              signInWithGoogle={signInWithGoogle}
            />
          </div>
        </form>
      </div>
      <div className="hidden">


      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      </div>
    </div>
  );
}
