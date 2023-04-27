import "./Expence.css";
import DateFormat from "./DateFormat";
import Card from "./Card";

function Expence(data) {

  return (
    <Card className="mainClass">
      <div className="expence-item">
        <div>
         <DateFormat
         date = {data.date} //its pros here .. 
         ></DateFormat>
        </div>
        <div className="expence-item__description">{data.title}</div>
        <div className="expence-item__price">$ {data.price}</div>
      </div>
    </Card>
  );
}

export default Expence;
