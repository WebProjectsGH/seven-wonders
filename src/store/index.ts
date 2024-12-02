import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";

export class Store {
    store1: any;
    store2: any;

    constructor() {
        makeAutoObservable(this);
    }
}

const storeContext = createContext<Store>({} as Store);
export const useStore = (): Store => useContext(storeContext);
export const StoreProvider = storeContext.Provider;
