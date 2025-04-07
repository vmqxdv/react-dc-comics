import './css/comics.css'

export default function comics(props) {
  const { comics: comicsData } = props;

  const comics = comicsData.map(comic => 
    <li key={generateKey(comic.title)}>
      <div className="comic-cover-container">
        <img src={comic.thumb} alt={comic.description} />
      </div>
      <div className="comic-series">{comic.series}</div>
    </li>
  )

  return (
    <div className="comics">
      <ul>{comics}</ul>
    </div>
  )
};



function generateKey(str, index) {
  return str.toLowerCase()
  .replaceAll(/[\W]+/g, '-')
  .replaceAll(/^-+|-+$/g, '') + `-${index}`;
};