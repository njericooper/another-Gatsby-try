import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styles from './about.module.css'
import ArticlePreview from '../components/article-preview'

class AboutIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const person = get(this.props, 'data.allContentfulPerson')
    

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <div className={styles.hero}>
          About
        </div>
        <div className="wrapper">
          <h1>{person.name}</h1>
          <h1>
           
          </h1>
        </div>
      </div>
    )
  }
}

export default AboutIndex

export const pageQuery = graphql`
  query AboutIndexQuery {
    allContentfulPerson{ 
    edges {
      node {
        name
        shortBio{
          shortBio
        }
        image {
          id
        }
        github
        email
        facebook
        title
      }
    }
  }
}
`
