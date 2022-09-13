import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import MainNavigations from './mainNavigation';




const App = () => {
  return (
    
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainNavigations/>
      </PersistGate>
  </Provider>
  )
}

export default App;
