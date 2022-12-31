



import Home from "./screen/App"
import Waitlist from "./screen/Waitlist"
import Thankyou from "./screen/Thankyou"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <div>
            <ToastContainer />


            <Router>
                <Routes>

                    <Route element={<Home />} path="/foresome" />
                    <Route element={<Waitlist />} path="foresome/waitlist" />
                    <Route element={<Thankyou />} path="foresome/thankyou" />
                </Routes>
            </Router>


        </div>
    )

}



export default App