import Logo from './logo';
import Navigation from './navigation'

export default function header() {
  return (
    <header class="bg-white d-flex justify-content-between align-items-center">
      <Logo/>
      <Navigation/>  
    </header>
  )
};