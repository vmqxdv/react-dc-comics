import './App.css'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'


import headerNavigationPages from './data/headerNavigationPages.json'
import footerInfoLinks from './data/footerInfoLinks.json'

export default function App() {
  return (
    <>
      <Header pages={headerNavigationPages}/>
      <Main/>
      <Footer links={footerInfoLinks}/>
    </>
  )
};
