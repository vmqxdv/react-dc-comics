import './App.css'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

import headerNavigationPages from './data/headerNavigationPages.json'
import comicsData from './data/comicsData.json'
import footerInfoData from './data/footerInfoData.json'

export default function App() {
  return (
    <>
      <Header pages={headerNavigationPages}/>
      <Main comics={comicsData}/>
      <Footer datas={footerInfoData}/>
    </>
  )
};
