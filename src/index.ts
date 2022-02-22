const path = require('path');

export function getRuntime(dir?: string, cwd?: string, name?: string) {
    const _cwd = cwd ?? path.resolve(process.cwd());
    const _dir = dir ?? path.resolve(__dirname);
    const _name = name ?? process.argv[1].split(path.sep).splice(-2)[0];

    const localNodeModules = path.resolve('node_modules', _name);
    const localNodeModulesBin = path.resolve('node_modules', '.bin', _name);

    return {
        isLocalNode: !_dir.match('node_modules') && !_dir.match('npm-cache'),
        isLocalInstalled:
            _dir === localNodeModules || _dir === localNodeModulesBin || false,
        isNpx: !!_dir.match('npm-cache'),
        isGlobal:
            !!_dir.match('node_modules') &&
            !_dir.match('npm-cache') &&
            _dir !== localNodeModules &&
            _dir !== localNodeModulesBin,
        dir: _dir,
        cwd: _cwd,
        name: _name,
    };
}
