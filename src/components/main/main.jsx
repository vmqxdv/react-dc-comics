import './style.css'
import Comics from './comics'

export default function main(props) {
  return (
    <main>

      <Comics comics={props.comics}/>

    </main>
  )
};