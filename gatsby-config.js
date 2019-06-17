const contentful = require('contentful')

const client = contentful.createClient({
  space: 'pg9a381fka8t',
  accessToken: '1qsfCgdgmAzVj91PjRSlRxQ18zG9enfbjEhJWMbzg_I',

})

client.getEntries()
.then((response) => console.log(response.items))
.catch(console.error)


let contentfulConfig

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful')
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: `pg9a381fka8t` || contentfulConfig.spaceId,
  accessToken: `1qsfCgdgmAzVj91PjRSlRxQ18zG9enfbjEhJWMbzg_I` || contentfulConfig.accessToken,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

module.exports = {
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
