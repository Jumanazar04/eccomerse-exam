import { BrowserRouter, Route, Routes } from "react-router-dom"
import GeneralLayout from "./components/GeneralLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneralLayout />}>
          <Route />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
