import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import Nav from './components/nav';
import { ThemeProvider } from '@material-tailwind/react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  }
]);

const theme = {
  select: {
    styles: {
      variants: {
        static: {
          colors: {
            label: {
              color: "#000000"
            },
            select: {
              borderColor: "#000000 !important"
            }
          }
        }
      }
    }
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <ThemeProvider value={theme}><RouterProvider router={router}></RouterProvider></ThemeProvider>
  </React.StrictMode>
);
