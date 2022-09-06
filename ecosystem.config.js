module.exports = {
    apps: [
      {
        name: 'platypus',
        script: 'index.js',
        instances: 1,
        autorestart: true,
        watch: false,
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  
    deploy: {
      production: {
        user: 'node',
        host: '128.199.107.27',
        ref: 'origin/master',
        repo: 'git@github.com:saefullohmaslul/platypus-app.git',
        path: '~/platypus-app',
        'post-deploy':
          'npm install && pm2 reload ecosystem.config.js --env production',
      },
    },
  };