import { BrowserRouter, Route, Routes } from "react-router-dom"
import GeneralLayout from "./components/GeneralLayout"
import HomePage from "./pages/Home/HomePage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
