import Labs from "./Labs";
import Kanbas from "./kanbas"
import {HashRouter} from "react-router-dom";
import { Route, Navigate, Routes, Switch } from "react-router-dom";

function App() {
   return (
      //  <HashRouter>
      //      <div>
      //       <Routes>
      //         <Route path="/src/Labs/" element={<Labs/>}/>
      //         <Route path="./Kanbas/*" element={<Kanbas/>}/>
      //       </Routes>
      //       </div>
      //  </HashRouter>
      <div>
        <Labs/>
        <Kanbas/>
      </div>
);}
export default App;
