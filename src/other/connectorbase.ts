/* class decorator */
export function staticImplements<T>() {
    return <U extends T>(constructor: U) => {constructor};
}

export interface IConnector {}

export interface IConnectorStatic {
    new(): IConnector;
    connect(): Promise<void>;
}

export type IConnectorConstructor = new () => IConnector // TODO discuss with architect