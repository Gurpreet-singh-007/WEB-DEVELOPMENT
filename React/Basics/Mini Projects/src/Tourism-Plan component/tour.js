import Card from "./Card";
import 'C://Coding/WEB DEVELOPMENT/React/Basics/Mini Projects/src/index.css' ;

function Tour({ tours, removetourHandler }) {
  return (
    <div className="container">
      <div>
        <h2 className="title">Plan With Love</h2>
      </div>
      <div className="cards">
        {tours.map(tour => {
          return <Card key={tour.id } {...tour} removeTour={removetourHandler}></Card>;
        })}
      </div>
    </div>
  );
}

export default Tour;
