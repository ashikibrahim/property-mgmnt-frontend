import {BrowserRouter as Router,Routes,Route,BrowserRouter,Navigate} from "react-router-dom"
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import Login from "./Pages/Login"
import Dashboard from './Pages/Dashboard'
import AddProperty from './Pages/AddForm'
import ViewProperty from "./Pages/ViewProperty";
import EditForm from "./Pages/EditForm";

function App() {

  return (
   <>
   <BrowserRouter>
   <Toaster position="top-center" reverseOrder={false} />
   <div>
   <Routes>
   <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/dashboard" element={<Dashboard/>} />
    <Route path="/add-property" element={<AddProperty/>} />
    <Route path="/view-property" element={<ViewProperty/>} />
    <Route path="/edit-property/:id" element={<EditForm/>} />
   </Routes>
   </div>
   </BrowserRouter>

   </>
  );
}

export default App;
