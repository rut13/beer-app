/* class decorator */
export function staticImplements<T>() {
    return <U extends T>(constructor: U) => {constructor};
}

export interface IConnector {}

export interface IConnectorStatic {
    new(): IConnector;
    connect(): Promise<void>;
    timeout(ms: any): Promise<unknown>;
}

export type IConnectorConstructor = new () => IConnector // TODO discuss with architect