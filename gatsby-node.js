const path = require('path')
const Dotenv = require('dotenv-webpack')

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
