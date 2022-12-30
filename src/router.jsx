



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

                    <Route element={<Home />} path="/" />
                    <Route element={<Waitlist />} path="/waitlist" />
                    <Route element={<Thankyou />} path="/thankyou" />
                </Routes>
            </Router>


        </div>
    )

}



export default App