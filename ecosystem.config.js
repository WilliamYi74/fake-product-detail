module.exports = {
  apps: [
    {
      name: 'super-uncle',
      exec_mode: 'cluster',
      instances: 'max',
      script: 'pnpm',
      args: 'start',
    },
  ],
}

