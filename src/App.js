import Image from "./components/Image/Image";
import Paragraph from "./components/Paragraph/Paragraph";
import koalaImage from "./assets/koala.jpg";
import karakolImage from "./assets/karakol.jpg";
import alakolImage from "./assets/alakol.jpg";
import Alert from "./components/Alert/Alert";

function App() {
  return (
    <div className="App">
     <h1>Hello world</h1>

     <Alert success>This is a sample alert</Alert>
     <Alert danger>This is a sample alert</Alert>

     <Paragraph size="32px" color="tomato" background="black">This is sample paragraph </Paragraph> 
     <Paragraph size="15px" color="blue" background="pink">This is small paragraph </Paragraph> 
     <Image url={koalaImage} width="300px" height="200px"/>
     <Image url={karakolImage} width="300px" height="200px"/>
     <Image url={alakolImage} width="300px" height="200px" />
    </div>
  );
}

export default App;
