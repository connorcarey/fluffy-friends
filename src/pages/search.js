import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Search = () => {
    return (
        <Layout pageTitle="Search">
<div class="btn-group dropright">
  <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropright
  </button>
  <div class="dropdown-menu">
  </div>
</div>
        </Layout>
    )    
}

export const Head = () => <Seo title="Search"/>
export default Search