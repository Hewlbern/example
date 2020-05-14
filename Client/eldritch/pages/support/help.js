import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash/object'
import Link from 'next/link'
import Router from 'next/router'

// Layouts
import Layout from "../../components/Layout";

export default function help() {
  return (
    <Layout>

      <div className="container mx-auto pt-32">
        <h1>
          Hello User ;)
        </h1>

       

        <div className="grid">
          <div className="card">
            <h3>How To? &rarr;</h3>
            <p>Find in-depth information about Gödel features and strategies.</p>
          </div>

          <div className="card">
            <h3>Learn &rarr;</h3>
            <p>Learn about Gödel in an interactive course with quizzes!</p>
          </div>

          <div
            className="card"
          >
            <h3>Examples &rarr;</h3>
            <p>Discover client success stories!</p>
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
