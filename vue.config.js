// vue.config.js
module.exports = {
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8088/api/',
                changeOrigin: true,
                pathRewrite: {                
                    '^/api': ''
                }
            }
        }        
    }
  }