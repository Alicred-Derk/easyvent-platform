import Routes from './components/pages'
import RouteContextProvider from './RouteContext';

import "./App.css";

function App() {
  return (
    <>
      <RouteContextProvider>
        <Routes />
      </RouteContextProvider>
    </>
  )
}

export default App
