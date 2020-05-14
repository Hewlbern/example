import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'

// Layouts
import SearchBar from '../components/SearchBar';
import Layout from "../components/Layout/Layout";

export default function index() {
  return (
    <Layout>

      <div className="container mx-auto pt-32">
        <h1>
          Welcome to Gödel!
        </h1>

        <SearchBar/>

<table className="table-auto">
  <thead>
    <tr>
      <th className="px-4 py-2">Platform</th>
      <th className="px-4 py-2">Average Pricing</th>
      <th className="px-4 py-2">Competition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border px-4 py-2">Google Shopping Adverts</td>
      <td className="border px-4 py-2">$60</td>
      <td className="border px-4 py-2">Medium</td>
    </tr>
    <tr className="bg-gray-100">
      <td className="border px-4 py-2">Pinterst</td>
      <td className="border px-4 py-2">$70</td>
      <td className="border px-4 py-2">Low</td>
    </tr>
    <tr>
      <td className="border px-4 py-2">TikTok</td>
      <td className="border px-4 py-2">$50</td>
      <td className="border px-4 py-2">Medium</td>
    </tr>
  </tbody>
</table>
      </div>

    </Layout>



  )
}
