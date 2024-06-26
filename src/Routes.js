import { Route, Routes as BaseRoutes, Link } from "react-router-dom";
// import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import backImage from "./images/background.png"
import { Container, Button, Progress, Row, Col, Card } from "reactstrap";
import Monkey from './images/monkey.svg'
import { useState, useEffect } from "react";
import apple from './images/apple-svgrepo-com.svg'
import cherry from './images/cherry-svgrepo-com.svg'
import watermelon from './images/fruit-melancia-watermelon-svgrepo-com.svg'
import orange from './images/orange-svgrepo-com.svg'
import pineapple from './images/pineapple-svgrepo-com.svg'
import mango from './images/mango-svgrepo-com.svg'
import bananas from './images/bananas-banana-svgrepo-com.svg'
import welcomeKiddo from './images/welcome_kiddo.webp'
import mizzo from './images/mizzo.webp'

export default function Routes() {
  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path="/intro" element={<Intro />} />
      <Route path="gamePage" element={<GamePage />}>
      </Route>
    </BaseRoutes>
  );
}

const Home = () => {
  return <Container style={{
    backgroundImage: `url(${backImage})`,
    backgroundSize: `100vw 100vh`,
    height: `100vh`,
    display: "flex",
    flexDirection: "column", // Set flex direction to column
    justifyContent: "space-between", // Align items vertically and distribute space between them
    textAlign: 'center',
    position: 'relative', // Make the container position relative to position the button
    paddingLeft: '0', // Remove left padding
    paddingRight: '0', // Remove right padding
  }}
    className="pl-0 pr-0"
  >
    <img src={Monkey} style={{ height: '50%', margin: 'auto' }}></img>
    <img src={welcomeKiddo} style={{ position: 'absolute', height: '50%', margin: 'auto', left: '150px' }}></img>
    <Button color='warning' size="lg" style={{ position: 'absolute', bottom: '20px', right: '20px' }}><Link to="/intro" style={{ textDecoration: 'none', color: 'inherit' }}>{"  Start  "}</Link></Button> {/* Position button absolutely */}
  </Container>

}
const Intro = () => {
  return <Container style={{
    backgroundImage: `url(${backImage})`,
    backgroundSize: `100vw 100vh`,
    height: `100vh`,
    display: "flex",
    flexDirection: "column", // Set flex direction to column
    justifyContent: "space-between", // Align items vertically and distribute space between them
    textAlign: 'center',
    position: 'relative', // Make the container position relative to position the button
    paddingLeft: '0', // Remove left padding
    paddingRight: '0', // Remove right padding
  }}
    className="pl-0 pr-0"
  >
    <img src={Monkey} style={{ height: '50%', margin: 'auto' }}></img>
    <img src={mizzo} style={{ position: 'absolute', height: '80%', margin: 'auto', bottom: '220px' }}></img>
    <Button color='warning' size="lg" style={{ position: 'absolute', bottom: '20px', right: '20px' }}><Link to="/gamePage" style={{ textDecoration: 'none', color: 'inherit' }}>{"  Yes  "}</Link></Button> {/* Position button absolutely */}
  </Container>

}
const Bananas = (props) => {
  return <Col>
    <img src={bananas} style={{ height: '50%', margin: 'auto' }}></img> {/* Set image height to 30% and use margin auto for centering */} {/* Set image height to 30% and use margin auto for centering */}
    <h2 className="warning">{`You won ${props.b} Bananas`}
    </h2>
    <Button color='danger' size="lg" style={{ position: 'absolute', bottom: '20px', right: '20px' }}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Play Again</Link></Button> {/* Position button absolutely */}
  </Col>

}



const GamePage = () => {
  const [elapsedTime, setElapsedTime] = useState(50);
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  const numbers = [1, 2, 3, 4, 5, 6]
  const [shuffledNumbers, setShuffledNumbers] = useState(numbers.sort(() => Math.random() - 0.5));
  let arrTemp = [false, false, false, false, false, false];
  let arrTrue = [true, true, true, true, true, true];
  const [showCard, setShowCard] = useState(arrTrue)
  const [showLeftCard, setShowLeftCard] = useState(arrTemp)
  const [showRightCard, setShowRightCard] = useState(arrTemp)
  const [isLeftOpen, setIsLeftOpen] = useState(false)
  const [currLeft, setCurrLeft] = useState(null);
  const [win, setWin] = useState(false)
  const [wonBananas, setWonBananas] = useState(50);
  const fruitNoMapping = {
    1: apple,
    2: mango,
    3: cherry,
    4: watermelon,
    5: pineapple,
    6: orange
  }
  let interval;

  useEffect(() => {
    interval = setInterval(() => {
      setElapsedTime(prevValue => {
        if (prevValue > 0) {
          return prevValue - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  const handleRightClick = (number, index) => {
    setShowRightCard(prevState => {
      const newState = [...prevState]; // Create a copy of prevState
      newState[index] = !newState[index]; // Update the value at index
      return newState;
    });

    setTimeout(() => {
      if (currLeft == number) {
        setShowCard(prevState => {
          const newState = [...prevState];
          newState[number - 1] = false;
          return newState;
        });
        let win = 0;
        showCard.forEach((e) => {
          if (e) {
            win++
          }
        })

        if (win == 1) {
          const currT = elapsedTime
          setWin(true)
          setWonBananas(currT)
        }

      } else {
        setIsLeftOpen(false);
      }
      setShowRightCard(prevState => {
        const newState = [...prevState]; // Create a copy of prevState
        newState[index] = !newState[index]; // Update the value at index
        return newState;
      })
      setCurrLeft(null);
    }, 400);
  };




  return (<Container style={{
    backgroundImage: `url(${backImage})`,
    backgroundSize: `100vw 100vh`,
    height: `100vh`,
    height: `100vh`,
    display: "flex",
    flexDirection: "column", // Set flex direction to column
    justifyContent: "space-between", // Align items vertically and distribute space between them
    textAlign: 'center',
    position: 'relative', // Make the container position relative to position the button
    paddingLeft: '0', // Remove left padding
    paddingRight: '0', // Remove right padding
  }}>
    <Row>
      <Col className="mt-4 mb-0">
        <Progress
          value={elapsedTime * 2}
          color="warning"
        />
      </Col>
    </Row>
    {win && <Row>
      {<Bananas b={wonBananas} />}
    </Row>}
    <Row xs="2" >
      <Col >
        <Row xs="3" >

          {arr.map((e, i) => (
            !showCard[e - 1] ? <Col key={i}><div style={{ height: "200px" }}></div> </Col> :
              <Col key={i}> {/* Ensure each child has a unique key */}
                {showLeftCard[i] && currLeft == e ? (
                  <Card
                    style={{
                      width: "120px",
                      height: "200px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      textAlign: 'center',
                      opacity: "0.7",

                    }}

                  >
                    <img src={fruitNoMapping[e]} alt={`fruit-${e}`} /> {/* Add alt text */}
                  </Card>
                ) : (
                  <Card
                    style={{ width: "120px", height: "200px", opacity: "0.5" }}
                    onClick={() => {
                      setShowLeftCard(prevState => {
                        const newState = [...prevState]; // Create a copy of prevState
                        newState[i] = !newState[i]; // Update the value at index i
                        return newState;
                      });
                      setIsLeftOpen(true);
                      setCurrLeft(e);
                    }}
                    color="danger"
                  ></Card>
                )}
              </Col>
          ))}

        </Row>
      </Col>
      <Col className="mr-4 ml-4">
        <Row xs="3">

          {shuffledNumbers.map((e, i) =>
            !showCard[e - 1] ? <Col key={i}><div style={{ height: "200px" }}></div> </Col> :
              <Col key={i}>
                {showRightCard[i] && isLeftOpen ? (<Card
                  style={{
                    width: "120px", height: "200px", display: "flex",
                    flexDirection: "column", // Set flex direction to column
                    justifyContent: "space-between", // Align items vertically and distribute space between them
                    textAlign: 'center',
                    opacity: "0.7",
                  }}>
                  <img src={fruitNoMapping[e]}></img>


                </Card>) : (<Card
                  style={{
                    width: "120px", height: "200px", display: "flex", opacity: "0.7"
                  }}
                  color="info"
                  onClick={() => {
                    if (isLeftOpen)
                      handleRightClick(e, i);
                  }}
                >


                </Card>)}
              </Col>)}
        </Row>
      </Col>

    </Row>
  </Container>)
}