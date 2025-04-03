import Navigation from "./navigation"
import Info from "./info"
import Socials from "./socials"
import './css/navigation.css'
import './css/info.css'
import './css/socials.css'

export default function footer() {
  return (
    <footer>
      <Navigation/>
      <Info/>
      <Socials/>
    </footer>
  )
};