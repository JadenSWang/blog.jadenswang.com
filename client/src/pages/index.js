import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import FeaturedContent from "../components/featuredcontent"

const IndexPage = () => {
  return (
    <Layout>
      <FeaturedContent
        title="something"
        description="sjdkflj"
        thumbnail="sjkdlfjs"
      />

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
