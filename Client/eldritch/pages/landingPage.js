import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'

// Layouts
import SearchBar from '../components/SearchBar';
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <Layout>

      <div className="container mx-auto pt-32">
        <h1>
          Gödel!
        </h1>
        <div>REAL-ESTATE PRESCIENCE - THE BEST INVESTMENT YOU'VE EVER MADE.</div>
        
       <div>Enter Email</div>
       <input type="text" placeholder="email"  />
       {/* //ref={emailRef} */}
       <button >Request Access</button>
       <button />
       </div>
       <div>
        <div className="grid">
          <div className="card">
            <h3>ORACLE IS NOT JUST ANOTHER PROPERTY DATA PORTAL</h3>
            <p>We built our tools from the ground up to give you the best understanding possible for your real-estate purchases.
We specifically designed it for those of you who want to make the right decisions with their money.
Oracle is smart. Blazingly smart. And it comes with advanced features that make you feel like a genius.
A.I. Value Analysis. Comparisons. Insights from sentiment of social media. Property Reminders, Scheduled Reports, and Data Extracts. To name but a few.
Oracle is so fast, delightful, and intelligent — you'll feel like you can see the future.</p>
          </div>
          <button/>

          <div className="card">
            <h3>CUT THROUGH THE NOISE</h3>
            <p>We've harnessed the power of artificial intelligence to automatically triage your property choices. This is the same technology used by cutting edge research facilities and hedge-funds, but accessible to you. Now you can be on an even playing field with the big players.</p>
            <button/>
          </div>

          <div
            className="card"
          >
            <h3>FOCUS ON WHAT MATTERS</h3>
            <p>Property is a long term investment. When you invest so much money into something, it should be chosen carefully.
Rental Yields, Capital Growth, School zones.... Oracle knows it all.</p>
          </div>

          <div>
            <h3>Expand &rarr;</h3>
            <p>
              Instantly expand your ecommerce site with our Quizatch Haderach integration Now!
            </p>
          </div>
        </div>
      </div>

    </Layout>



  )
}
