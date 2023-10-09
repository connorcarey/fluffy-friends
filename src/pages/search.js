import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { graphql, useStaticQuery, navigate } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
    button,
    container
} from '../components/search.module.scss'

const randomGenerator = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const Search = () => {
    const data = useStaticQuery(graphql`
query {
  allImageSharp {
    edges {
      node {
        gatsbyImageData
        fluid {
          originalImg
        }
      }
    }
  }
}
    `)
    const arry = data.allImageSharp.edges
    return (
        <Layout>
            <div className={container}>
                <GatsbyImage image={getImage(arry[randomGenerator(0, arry.length-1)].node)} alt="No Fluffy Friend:(" />
                <button onClick={()=>{navigate("/search")}} type="button" className={button}>Next</button>
            </div>
        </Layout>
    )    
}

export const Head = () => <Seo title="Search"/>
export default Search