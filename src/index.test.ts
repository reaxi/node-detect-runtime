import { getRuntime } from './';
import { resolve } from 'path';

describe('getRuntime', () => {
    test('is local node run  ', () => {
        const { isLocalNode } = getRuntime();

        expect(isLocalNode).toBeTruthy();
    });

    test('is local installed run ', () => {
        const customName = 'my-app';
        const { isLocalInstalled } = getRuntime(
            resolve('node_modules', customName),
            './',
            customName
        );
        expect(isLocalInstalled).toBeTruthy();
    });

    test('is npx run', () => {
        const { isNpx } = getRuntime('npm-cache');

        expect(isNpx).toBeTruthy();
    });

    test('is run globally', () => {
        const { isGlobal } = getRuntime('node_modules');

        expect(isGlobal).toBeTruthy();
    });
});
