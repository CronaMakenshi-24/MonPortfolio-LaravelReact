import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Nav from '../Components/Nav'
import Apropos from '../Pages/Apropos'
import Realisation from '../Pages/Realisation'
import Contact from '../Pages/Contact'
import Pages404 from '../Pages/Error404'

function App() {
    return (
        <div className="max-lg:relative max-lg:min-h-full max-lg:pb-72">
            <React.StrictMode>
                <div className='2xl:flex 2xl:flex-row w-full '>
                    <BrowserRouter>
                        <Nav/>
                        <Routes>
                            <Route>
                                <Route path="/" element={<Apropos/>}/>
                                <Route path="Realisation" element={<Realisation/>}/>
                                <Route path="Contact" element={<Contact/>}/>
                                <Route path="/*" element={<Pages404/>}/>
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </div>
            </React.StrictMode>
        </div>
    )
}

export default App