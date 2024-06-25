import 'bootstrap/dist/css/bootstrap.min.css'
export default function PageTitle(props){
  const className = `display-${props.size} text-${props.color} text-${props.align} mt-${props.margin}`
    return(
      <h1 className={className}>{props.title}</h1>
    )
}
PageTitle.defaultProps = {
  size: '4',
  color: "dark",
  align: 'center',
  margin: "3",
}