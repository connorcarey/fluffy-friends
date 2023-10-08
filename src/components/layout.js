import * as React from 'react'
import Seo from './seo'
import { useStaticQuery, graphql } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
    return (
        <div>
            <header>{pageTitle}</header>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Search</li>
                </ul>
            </nav>
            <main>
                <h1>{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export const Head = () => <Seo title="Placeholder"/>
export default Layout