import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/HomePage/HomePage';
import AboutPage from '../pages/AboutPage/AboutPage';
import Contact from '../pages/Contact/Contact';
import ProductPage from '../pages/ProductPage/ProductPage';


const my_router = createBrowserRouter(
    [
        {
            element: <App/>,
            children:[
                {
                    path:'/',
                    element:<HomePage/>
                },
                {
                    path:'/About',
                    element:<AboutPage/>
                },
                {
                    path:'/Contact',
                    element:<Contact/>
                },
                {
                    path:'/Menu',
                    element:<ProductPage/>
                }
            ]
        }
    ]

);

export default my_router;