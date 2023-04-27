
import './card.css';

function Card(props){
 const classes = 'card ' + props.className;

 return(<div className={classes}>
    {props.children} 
 </div> )}

export default Card;

//props.children is used to add the add in JSX. 