type RuntimeResponse = {
    isLocalNode: boolean;
    isLocalInstalled: boolean;
    isNpx: boolean;
    isGlobal: boolean;
    dir: string;
    cwd: string;
    name: string;
};

declare function getRuntime(
    dir?: string,
    cwd?: string,
    name?: string
): RuntimeResponse;
