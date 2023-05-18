import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import AboutMe from './pages/aboutme';
import Reports from './pages/reports';

// 1. Generate a browser router component to display in #root.
// 2. The content within the children element will be displayed in the <Outlet /> component within App.js, depending on the current router path.
// 3. Therefore, instead of having App.js render the <Home /> component, it will be incorporated into the browser router.
// 4. The routing is established through the <Link /> component located in ./components/top-menu/HyperLinks.jsx.

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children:[
            {
                path:'/',
                element: <Home />
            },
            {
                path:'/about',
                element: <AboutMe />
            },
            {
                path:'/reports',
                element: <Reports />
            },
        ]        
    },
]);

ReactDOM.render(<RouterProvider router={router} />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
