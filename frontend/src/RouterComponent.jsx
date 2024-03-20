import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomeComponent from './components/pages/HomeComponent'
import AboutComponent from './components/pages/AboutComponent'
import ContactComponent from './components/pages/ContactComponent'
import NewsComponent from './components/pages/NewsComponent'
import NewsDetailsComponent from './components/pages/NewsDetailsComponent'
import PageNotFound from './layouts/PageNotFound'

export default function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
        <Route path="/news" element={<NewsComponent />} />
        <Route path="/news-details/:id" element={<NewsDetailsComponent />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
}
