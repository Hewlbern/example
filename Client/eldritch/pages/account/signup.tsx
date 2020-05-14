import { useRef, useState } from 'react';
import React from 'react'
import Router, { useRouter } from 'next/router';


import Link from 'next/link'

import Layout from "../../components/Layout/Layout";

export default function Signup() {

  const router = useRouter()
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const requestRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);
  async function handleSignUp() {

    var details = {
      'email': emailRef.current?.value,
      'password': passRef.current?.value,
      'requests': requestRef.current?.value
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


    console.log(fBody);

    fetch('http://localhost:5000/auth/register', {
      method: 'POST',
      headers: headers,
      body: fBody
    }).then((response) => {
      console.log(response);

      router.push('/login');

    });
  }

  return (

    <Layout>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Create a new user!!</h1>
            {JSON.stringify(message)}
            <input type="text" className="block border border-grey-light w-full p-3 rounded mb-4" placeholder="email" ref={emailRef} /><br />
            <input type="password" className="block border border-grey-light w-full p-3 rounded mb-4" placeholder="password" ref={passRef} /><br />
            <input type="number" className="block border border-grey-light w-full p-3 rounded mb-4" placeholder="100" ref={requestRef} /><br />
            <button className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1" onClick={handleSignUp}>Sign Up</button>
            <div className="text-grey-dark mt-6">
              Already have an account?
                    <Link href="account/login/">
                <a className="no-underline border-b border-blue text-blue" >
                  Login
                    </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}