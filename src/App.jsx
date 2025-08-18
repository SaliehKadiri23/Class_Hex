import React from 'react'
import Layout from "../Ui/Layout/Layout";
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router';
import Home from "../Ui/Pages/Home";
import WhyChooseUs from '../Ui/Pages/WhyChooseUs';
import OurCourses from '../Ui/Pages/OurCourses';
import PricingSection from '../Ui/Pages/PricingSection';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path='about' element={<WhyChooseUs/>} />
        <Route path='courses' element={<OurCourses/>} />
        <Route path='pricing' element={<PricingSection/>} />
      </Route>
    )
  )
  return (
   <RouterProvider router={router}/>
  )
}

export default App