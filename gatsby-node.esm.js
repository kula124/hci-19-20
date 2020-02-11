const path = require('path')
const Dotenv = require('dotenv-webpack')

const { responseMapper, mappers } = require('./src/helper.js')
// require('dotenv-safe').config()

exports.onCreateWebpackConfig = ({ stage, actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules']
    },
    plugins: [
      new Dotenv()
    ]
  })
}

const listMapper = responseMapper(mappers.blogList)
const blogPostMapper = responseMapper(mappers.blogPosts)

exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`{
    allContentfulBlogPost {
      nodes {
        summary {
          internal {
            content
          }
        }
        body {
          body
          id
        }
        title
        updatedAt
        coverImage {
          fluid {
            base64
            aspectRatio
            src
            srcSet
            sizes
          }
        }
      }
    }
  }`)

  const res = listMapper(raw.data).posts.map(blogPostMapper)

  res.forEach((e, index) => actions.createPage({
    component: path.resolve(`./src/layouts/BlogPostPage/index.js`),
    context: {
      ...e
    },
    path: `posts/post${index}`,
    slug: `posts/post${index}`
  }))
}
