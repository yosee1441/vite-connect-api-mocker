const esbuild = require('esbuild')

esbuild
  .build({
    clean: true,
    entries: ['src/index'],
    declaration: true,
    rollup: {
      emitCJS: true,
    },
  })
  .catch(() => process.exit(1))
