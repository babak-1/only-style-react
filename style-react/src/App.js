import "./App.css";
import { Header } from "./components/Header/Index";
import { Searchbar } from "./components/Searchbar/Index";
import { Card } from "./components/card/Index";
import cardpic1 from "./assets/image/cardPic1.svg";
import { Button } from "./components/Button/Index";
import cardpic2 from "./assets/image/cardPic2.svg";
import { CardSecond } from "./components/CardSecond/Index";
import mobile from "./assets/image/mobile.svg";
import buildings from "./assets/image/binalar.svg";
import buildingsSmall from "./assets/image/binalar-balaca.svg";
import { useSelector } from "react-redux";

function App() {
  const value = useSelector((state) => state.counter);
  console.log(value);

  return (
    <div className="App">
      <Header />
      <Searchbar />
      <div className="cards-container">
        <div className="cards-cont-for-width">
          <div className="cards-top">
            <h2>Featured Sales</h2>
            <Button text={"All"} whiteBtn />
          </div>
          <div className="cards">
            <Card
              price="290.000"
              cardPic={cardpic1}
              forWhat="sale"
              city={"London"}
              street={"Oxford St"}
              date={"26 November 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />{" "}
            <Card
              price="290.000"
              cardPic={cardpic1}
              forWhat="sale"
              city={"London"}
              street={"Oxford St"}
              date={"26 November 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />{" "}
            <Card
              price="290.000"
              cardPic={cardpic1}
              forWhat="sale"
              city={"London"}
              street={"Oxford St"}
              date={"26 November 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />{" "}
            <Card
              price="290.000"
              cardPic={cardpic1}
              forWhat="sale"
              city={"London"}
              street={"Oxford St"}
              date={"26 November 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />
          </div>
          <div className="cards-top cards-top-not-first">
            <h2>Featured Rental</h2>
            <Button text={"All"} whiteBtn />
          </div>
          <div className="cards">
            <Card
              price="3.000"
              cardPic={cardpic2}
              forWhat="rent"
              city={"London"}
              street={"John Ruskin"}
              date={"10 May 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />
            <Card
              price="5.000"
              cardPic={cardpic2}
              forWhat="rent"
              city={"London"}
              street={"Aliyar Aliyev"}
              date={"10 May 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />{" "}
            <Card
              price="1.000"
              cardPic={cardpic2}
              forWhat="rent"
              city={"London"}
              street={"Nizami"}
              date={"10 May 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />{" "}
            <Card
              price="4.000"
              cardPic={cardpic2}
              forWhat="rent"
              city={"London"}
              street={"Oxford St"}
              date={"10 May 2020"}
              roomCount={"3+1"}
              floor={"10"}
              square={"150"}
            />
          </div>

          <CardSecond
            text={"Search On Map"}
            cardSecondRed
            cardPic={mobile}
            headerTxt={"Search Your Dream House On The Map"}
            cardParag={
              "Find the house you are looking for easily according to location information."
            }
          />

          <div className="cards-top cards-top-not-first">
            <h2>Featured Project</h2>
            <Button text={"All"} whiteBtn />
          </div>

          <CardSecond
            text={"View Project"}
            whiteRedBtn
            cardPic={buildings}
            headerTxt={"Life Valley Project"}
            cardParag={
              "The privileged location in Lambeth region in the west of London city. "
            }
            cardParag2={
              "The project is close to many hotels, hospitals and commercial centers..."
            }
          />

          <div className="cardSecondCont">
            <CardSecond
              text={"View Project"}
              whiteRedBtn
              cardPic={buildingsSmall}
              headerTxt={"Life Valley Project"}
              cardParag={
                "The privileged location in Lambeth region in the west of London city. "
              }
              cardParag2={
                "The project is close to many hotels, hospitals and commercial centers..."
              }
            />
            <CardSecond
              text={"View Project"}
              whiteRedBtn
              cardPic={buildingsSmall}
              headerTxt={"Life Valley Project"}
              cardParag={
                "The privileged location in Lambeth region in the west of London city. "
              }
              cardParag2={
                "The project is close to many hotels, hospitals and commercial centers..."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
