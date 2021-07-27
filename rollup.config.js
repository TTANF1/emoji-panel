import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';

export default {
  input: './src/index.ts',
  output: [
    {
      name: 'index', // 变量名，代表你的 iife/umd 包，同一页上的其他脚本可以访问它
      file: './dist/index.umd.js',
      format: 'umd', // 通用模块定义，以amd，cjs 和 iife 为一体
    },
    {
      file: './dist/index.esm.js',
      format: 'es', // 将软件包保存为 ES 模块文件，在现代浏览器中可以通过 <script type=module> 标签引入
    },
  ],
  plugins: [
    postcss({ modules: true }),
    commonjs(),
    resolve(),
    typescript({
      typescript: require('typescript'),
    }),
    terser(), // 减少打包体积
  ],
};
