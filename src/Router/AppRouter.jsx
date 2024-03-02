import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import Services from '../Pages/Services/Services';

const AppRouter = () => {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                </Routes>
        </BrowserRouter>
    );
}

export default AppRouter;
