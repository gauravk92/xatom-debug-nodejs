/// <reference types="node" />
import { EventEmitter } from 'events';
import { ChromeDebuggerProtocol } from './ChromeDebuggerProtocol';
export declare class NodeDebugger extends EventEmitter {
    private childProcess;
    protocol: ChromeDebuggerProtocol;
    scriptPath: string;
    binaryPath: string;
    hostName: string;
    cwd: string;
    portNumber: number;
    launchArguments: Array<string>;
    environmentVariables: Object;
    stopScript(): Promise<boolean>;
    getCallStack(): {
        name: any;
        columnNumber: any;
        lineNumber: any;
        filePath: any;
    }[];
    getScope(): {
        name: any;
        value: any;
    }[];
    connect(): any;
    normalizePath(dir: any): any;
    executeScript(): Promise<any>;
}