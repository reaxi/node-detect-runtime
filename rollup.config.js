import typescript from '@rollup/plugin-typescript';

import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.ts',
    output: {
        file: 'dist/index.js',
        format: 'commonjs',
    },
    plugins: [
        typescript(),
        commonjs(),
        nodeResolve(),
        terser({
            output: {
                comments: false,
            },
        }),
    ],
    external: [], //external packages
};
