import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return(
        <Layout pageTitle="Home">
            <h2><u>Hello!</u></h2>
            <p>Thank you for stopping by and checking out Fluffy Friends!
                This website took countless years of research in order to develop.
                (I can't explain why, the fluffies are holding me hostage)
                (ps. they said to bring back the plushies)
            </p>
            <h2><u>Why?</u></h2>
            <p>Everybody needs a little fluffy friend in their life. I know I need mine :)
            </p>
            <StaticImage
            src= "../akora.jpg"
            alt= "My pet dog."
            />
        </Layout>
    )
}

export const Head = () => <Seo title="Home"/>
export default IndexPage