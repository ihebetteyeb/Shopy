import { Suspense, useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import Routing from "./routes/routing";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p> Loading...</p>}>
        <Routing />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;

