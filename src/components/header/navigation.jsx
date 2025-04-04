export default function navigation(props) {
  const pages = props.pages.map((page, index) => 
    <li key={index}>
      <a href={page.url}>{page.text}</a>
    </li>
  )

  return (
    <div className="navigation">
      <ul>{pages}</ul>
    </div>
  )
};