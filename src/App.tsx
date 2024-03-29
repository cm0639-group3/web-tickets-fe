import { AppRoutes } from "./router/Routes";
import { Layout } from "./components/Layout/Layout";
import { Provider } from "react-redux";
import './App.css'
import {store} from "./store/store";
import {AppErrorBoundary} from "./modules/notification";



function App() {
  return (
      <AppErrorBoundary>
          <Provider store={store}>
              <Layout>
                  <AppRoutes />
                  {/*TODO: Create a separate folder with downloaded fonts and use them*/}
                  <style>
                      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
                  </style>
              </Layout>
          </Provider>
      </AppErrorBoundary>
  )
}

export default App
