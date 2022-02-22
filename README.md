# node-detect-runtime

detects node runtime

useful for cli tools

-   local (node index.js)

    > like executing using **node filename.js** directly

-   local installed (node_modules)

    > npm i my-app (installed in the project package.json and local node_modules)
    > npm exec my-app | yarn my-app

-   npx

    > npx my-app

-   global

    > npm i -g my-app

    > my-app

## usage:

```
yarn add @reaxi/node-detect-runtime
```

```ts
import { getRuntime } from '@reaxi/node-detect-runtime';

const { isGlobal } = getRuntime();
```

#### response:

```ts
{
    isLocalNode: boolean,
    isLocalInstalled:boolean,
    isNpx: boolean,
    isGlobal: boolean,
    dir: string,
    cwd: string,
    name: string,
}
```
