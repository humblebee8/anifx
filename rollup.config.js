import { terser } from 'rollup-plugin-terser';

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/es.bundle.js',
      format: 'es'
    },
    {
      file: 'dist/cjs.bundle.js',
      format: 'cjs'
    },
    {
      file: 'dist/bundle.min.js',
      format: 'iife',
      name: 'fx',
      plugins: [terser()]
    }
  ]
};