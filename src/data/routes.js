import Home from '../pages/Home';
import About from '../pages/About';
import Properties from '../pages/Properties/Properties';
import Contact from '../pages/Contact';


export const navigationRoutes = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
    element: <Home/>,
  },
  {
    id: 2,
    name: 'Nosotros',
    path: '#sobre-mi',
    element: <About />,
  },
  {
    id: 3,
    name: 'Propiedades',
    path: '#propiedades',
    element: <Properties />,
  },
  {
    id: 4,
    name: 'Contactanos',
    path: '#contactanos',
    element: <Contact />,
  },
];
