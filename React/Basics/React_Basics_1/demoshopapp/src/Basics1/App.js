// import logo from './logo.svg';
import './App.css';
import Item from './components1/Item'   ;
import ItemDate from './components1/ItemDate';
import Card from './components1/card';

function App() {
  const item2date = 55 ; 
  const response =[
    {
      ItemName : "Nirma" ,
      ItemDate : 22 ,
      ItemMonth : "August" ,
      ItemYear : 3030,
    } 
    ,
    {
      ItemName : "Nirma2" ,
      ItemDate : 222 ,
      ItemMonth : "August2" ,
      ItemYear : 30302,
    } 
    ,
    {
      ItemName : "Nirma3" ,
      ItemDate : 223 ,
      ItemMonth : "August3" ,
      ItemYear : 30303,
    } 
    ,
  ]
  return (
    <div>
      <Card>


        <Item name= {response[0].ItemName} ></Item>
        <ItemDate date={response[0].ItemDate} month={response[0].ItemMonth} year={response[0].ItemYear} ></ItemDate>

        <Item name={response[1].ItemName}></Item>
        <ItemDate date={item2date} month={response[0].ItemMonth} year={response[1].ItemYear}></ItemDate>

        <Item name= {response[2].ItemName} ></Item>
        <ItemDate date={response[2].ItemDate} month={response[2].ItemMonth} year={response[2].ItemYear} ></ItemDate>


      </Card>

      <div className="App">

        Hello Jee

      </div> 
    </div>
  );
}

export default App;
