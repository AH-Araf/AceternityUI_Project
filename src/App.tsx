

import { RouterProvider } from "react-router-dom"
import { router } from "./Route/Route"


function App() {

  return (
    <div>
      
      <div className="max-w-screen-3xl mx-auto">
        <RouterProvider router={router} />
      </div>

    </div>
  )
}

export default App
