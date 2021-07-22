import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './demo/src/index.ts',
  output: {
    file: './demo/dist/index.js',
  },
  format: 'iife',
  // exports: 'named',
  // resolve: true,
  // sourcemap: false,
  plugins: [
    postcss({ modules: true }),
    commonjs(),
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
  ],
};
