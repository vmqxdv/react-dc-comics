export default function info(props) {

  const datas = props.datas.map((data, index) => 
    <div>
      <h6>{data.category}</h6>
      <ul>
        {data.links.map(link => <li key={`${link.text}_${index}`}><a href={link.url}>{link.text}</a></li>)}
      </ul>
    </div>
  )

  return (
    <div className="info">

      <div className="links">{datas}</div>

      <div className="big-logo">
        <img src="src\assets\img\dc-logo-bg.png" alt="#" />
      </div>

    </div>
  )
};