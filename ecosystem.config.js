module.exports = {
    apps: [{
      name: "file-sharing-app",
      script: "src/index.js",
      env: {
        NODE_ENV: "development",
        PORT: 5001
      },
      env_production: {
        NODE_ENV: "production",
        PORT: 5001
      },
      watch: true,
      ignore_watch: ["node_modules", "uploads"],
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_memory_restart: "1G"
    }]
  }; 