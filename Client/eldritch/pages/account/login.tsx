
import { useRef, useState } from 'react';
import React from 'react'
import PropTypes from 'prop-types'


import Link from 'next/link'

import Layout from "../../components/Layout/Layout";




export default function Login() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);

  async function handleLogin() {
    // console.log("email", emailRef.current?.value);
    // console.log("password", passRef.current?.value);


    var details = {
      'email': emailRef.current?.value,
      'password': passRef.current?.value
    };
    var headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    let formBody = [];
    for (let property in details) {
      let encodedKey = encodeURIComponent(property);
      let encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    let fBody = formBody.join("&")


    // console.log(fBody);

    fetch('http://localhost:5000/auth/login', {
      method: 'POST',
      headers: headers,
      body: fBody
    }).then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
        setMessage(responseData);
      });
  }

  return (
    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Login</h1>
            
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" placeholder="email" ref={emailRef} />
            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" placeholder="password" ref={passRef} />
            {JSON.stringify(message)}
            <button onClick={handleLogin} className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1">Login</button>
            <div className="text-grey-dark mt-6">
              No account?
                    <Link href="account/signup/">
                <a className="no-underline border-b border-blue text-blue" >
                  Sign up
                    </a>
              </Link>
            </div>
            </div>
          </div>
        </div>
                
    </Layout>
  );
}