import Logo from './logo';
import Navigation from './navigation'
import './style.css'

export default function header(props) {
  return (
    <header>
      <Logo/>
      <Navigation pages={props.pages}/>
    </header>
  )
};