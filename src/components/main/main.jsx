import './css/main.css'
import Comics from './comics'

export default function main(props) {
  return (
    <main>

      <div className='jumbotron'></div>

      <div className="content">
        <div className="tag">CURRENT SERIES</div>
        <Comics comics={props.comics}/>
        <button>LOAD MORE</button>
      </div>

    </main>
  )
};