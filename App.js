//import logo from "./logo.svg";
import "./App.css";
import Expence from "./Component/ExpenceITEM";
import Card from "./Component/Card";

function App() {
  const data = [
    {
      date: new Date(2021, 3, 23),
      title: "insurance here",
      price: 450,
    },
    {
      date: new Date(2021, 5, 23),
      title: "ksjk here",
      price: 4560,
    },
    {
      date: new Date(2021, 9, 23),
      title: "hweujiol here",
      price: 4506,
    },
    {
      date: new Date(2021, 7, 23),
      title: "sjkjksjkjik here",
      price: 45880,
    },
    {
      date: new Date(2021, 12, 23),
      title: "tututijhjs here",
      price: 99450,
    },
    {
      date: new Date(2021, 1, 8),
      title: "tututijhjs here",
      price: 99450,
    },
    {
      date: new Date(2021, 4, 13),
      title: "tututijhjs here",
      price: 99450,
    },
    {
      date: new Date(2021, 2, 3),
      title: "tututijhjs here",
      price: 99450,
    },
  ];

  return (
    <Card>
      {data.map((item) => (
        <div>
          <Expence
            date={item.date}
            title={item.title}
            price={item.price}
          ></Expence>
        </div>
      ))}

      {/* // <Expence date={data[0].date} title={data[0].title} price={data[0].price}>
     
      // </Expence>
     
      // <Expence date={data[1].date} title={data[1].title} price={data[1].price}>
      
      // </Expence>
     
      // <Expence date={data[2].date} title={data[2].title} price={data[2].price}>
      
      // </Expence>
      
      // <Expence date={data[3].date} title={data[3].title} price={data[3].price}>
      
      // </Expence>
      
      // <Expence date={data[4].date} title={data[4].title} price={data[4].price}>
      
      // </Expence> */}
    </Card>
  );
}

export default App;
