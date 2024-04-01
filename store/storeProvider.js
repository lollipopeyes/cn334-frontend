//store/storeProvider.js
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, persistor } from './index'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function StoreProvider({ children }) {
    const storeRef = useRef()
    const persistor = useRef()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        persistor.current = persistStore(storeRef.current)
    }
    return <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistor.current}>
                {children}
            </PersistGate>
        </Provider>
}