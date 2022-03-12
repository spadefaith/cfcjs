require('esbuild').build({
    entryPoints: ['src/app.js'],
    bundle: true,
    outfile: 'dist/cake.js',
    // minify:true,
    
  }).catch(() => process.exit(1))

  require('esbuild').build({
    entryPoints: ['src/app.js'],
    bundle: true,
    outfile: 'dist/cake-min.js',
    minify:true,
    
  }).catch(() => process.exit(1))