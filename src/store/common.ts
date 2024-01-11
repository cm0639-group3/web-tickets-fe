/**
 * Approach was taken from here https://stackoverflow.com/a/41442542
 */
export interface CommonAction<T, P> {
    readonly type: T;
    readonly payload: P;
}

export function createAction<T extends string, P>(type: T, payload: P): CommonAction<T, P> {
    return { type, payload };
}

export type WithCallback<T> = T & { onSuccessCallback?: () => void; onErrorCallback?: () => void };
