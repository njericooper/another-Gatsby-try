import React from 'react'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import styles from './article-preview-card.css'
/*import styles from './article-preview.module.css'*/

export default ({ article }) => (
  <div className="main-section">
    <div className="card-container" >
    <Img className="cardImage" alt="" sizes={article.heroImage.sizes}/>
      <div className="card-text-container">
        <span className="card-span"></span>
    <h1 className="article-title">
      <Link to={`/blog/${article.slug}`}>{article.title}</Link>
    </h1>
    <p className="article-descrip"
      dangerouslySetInnerHTML={{
        __html: article.description.childMarkdownRemark.html,
      }}
    />
      </div>
    </div>
  </div>
)
