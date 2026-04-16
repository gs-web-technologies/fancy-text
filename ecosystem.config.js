module.exports = {
  apps: [
    {
      name: "fancytext-nextjs",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 8989",
      cwd: "/home/gswebtech-fancytext/htdocs/fancytext.gswebtech.co.in",
      instances: 2,
      exec_mode: "cluster",
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: "production",
        PORT: 8989
      }
    }
  ]
};
