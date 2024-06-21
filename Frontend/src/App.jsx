import React, { useRef, useState } from "react";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(false);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current?.value || "";
    if (!isLogin) {
      if (password !== confirmPassword) {
        console.log("Please enter the correct password in both input boxes");
      }
    }
    console.log("Email:", email, "Password:", password);
  };

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
    console.log("Login status now:", isLogin);
  };

  return (
    <div className="bg-gradient-to-tl  p-32 from-amber-800 to-indigo-300 max-h-full min-h-screen">
      <div className="bg-slate-50 bg-opacity-10 shadow-2xl rounded-3xl p-7 h-30 m-auto w-[500px]">
        <form action="submit" onSubmit={submitHandler}>
          {isLogin ? (
            <p className="font-black font-serif text-2xl">
              Login to your account
            </p>
          ) : (
            <p className="font-black font-serif text-2xl">
              Create your account
            </p>
          )}
          <label
            htmlFor="email"
            className="mb-2 hover:font-serif hover:text-2xl font-medium"
          >
            Email
          </label>
          <br />
          <input
            className="bg-slate-200 rounded-md shadow-[inset_-12px_-8px_40px_#46464620] mb-7 w-[85%] h-9"
            type="email"
            id="email"
            required
            ref={emailRef}
          />
          <br />
          <label
            htmlFor="password"
            className="mb-2 hover:font-serif hover:text-2xl font-medium"
          >
            Password
          </label>
          <br />
          <input
            className="bg-slate-200 rounded-md mb-7 w-[85%] h-9 mt-1 shadow-[inset_-12px_-8px_40px_#46464620]"
            type="password"
            id="password"
            ref={passwordRef}
          />
          {!isLogin && (
            <>
              <br />
              <label
                htmlFor="confirmPassword"
                className="mb-2 hover:font-serif hover:text-2xl font-medium"
              >
                Confirm Password
              </label>
              <br />
              <input
                className="bg-slate-200 rounded-md mb-7 shadow-[inset_-12px_-8px_40px_#46464620] w-[85%] h-9 mt-1"
                type="password"
                id="confirmPassword"
                ref={confirmPasswordRef}
              />
            </>
          )}
          <br />
          <button
            type="submit"
            className="text-white w-[83%] h-10 shadow-lg bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLogin ? "Login" : "Create my account"}
          </button>
          {isLogin && (
            <>
              <br />
              <a
                className="text-xl m-auto hover:text-amber-200 hover:text-2xl text-blue-800 font-serif"
                href="/forgetPassword"
              >
                Forget Password
              </a>
            </>
          )}
          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              OR
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
          {isLogin ? (
            <p>
              Don't have an account?{" "}
              <button
                type="button"
                onClick={switchAuthModeHandler}
                className="text-blue-700 underline"
              >
                Sign up here
              </button>
            </p>
          ) : (
            <p>
              Login with an existing account{" "}
              <button
                type="button"
                onClick={switchAuthModeHandler}
                className="text-blue-700 underline"
              >
                Login
              </button>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
