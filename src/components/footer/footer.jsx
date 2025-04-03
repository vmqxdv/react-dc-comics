import Navigation from "./navigation"
import Info from "./info"
import Socials from "./socials"
import './css/navigation.css'
import './css/info.css'

export default function footer() {
  return (
    <footer>

      <Navigation/>
      <Info/>
      <Socials/>

    </footer>
  )
};