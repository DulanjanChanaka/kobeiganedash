import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import Woman from "./components/woman";
import Hospital from "./components/hospital";
import Moh from "./components/moh";
import Weight from "./components/weight";
import Mother from "./components/mother";
import Navbar from "./components/navbar";

function App() {

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Contact/>}/>
        <Route  path='/woman' element={<Woman/>}/>
        <Route  path='/hospital' element={<Hospital/>}/>
        <Route  path='/moh' element={<Moh/>}/>
        <Route  path='/weight' element={<Weight/>}/>
        <Route  path='/mother' element={<Mother/>}/>
        
        <Route/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

