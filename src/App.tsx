import { AppRoutes } from "./router/Routes";
import { Layout } from "./components/Layout/Layout";
import './App.css'

function App() {
  return (
      <Layout>
          <AppRoutes />
          {/*TODO: Create a separate folder with downloaded fonts and use them*/}
          <style>
              @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap');
          </style>
      </Layout>
  )
}

export default App
