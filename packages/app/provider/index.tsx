import { store } from 'app/config/store';
import { NavigationProvider } from './navigation';
import { SafeArea } from './safe-area';
import { Provider as ProviderRedux } from 'react-redux';
import { persistStore } from 'reduxjs-toolkit-persist';
import { PersistGate } from 'reduxjs-toolkit-persist/integration/react';

export function Provider({ children }: { children: React.ReactNode }) {
  let persistor = persistStore(store);
  return (
    <ProviderRedux store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeArea>
          <NavigationProvider>{children}</NavigationProvider>
        </SafeArea>
      </PersistGate>
    </ProviderRedux>
  );
}
