// SignIn.jsx
import React, { useRef, useState } from "react";
import axios from 'axios';

function SignIn() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(null);
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/register ', { email, password });
      console.log(response.data);
      // Handle successful sign-in
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <section className="rounded-md bg-black/70 p-2">
        <div className="flex items-center justify-center text-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-white"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      ref={emailRef}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor=""
                      className="text-base font-medium text-white"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      title=""
                      className="text-sm font-semibold bg-black text-white hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2">
                    <input
                      ref={passwordRef}
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-white text-black px-3.5 py-2.5 font-semibold leading-7  hover:bg-white/80"
                  >
                    Get started
                  </button>
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
