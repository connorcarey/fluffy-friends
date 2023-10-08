import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import 'bootstrap'

const IndexPage = () => {
    return(
        <Layout pageTitle="Home">
            <h2>About the website</h2>
        </Layout>
    )
}

export const Head = () => <Seo title="Home"/>
export default IndexPage