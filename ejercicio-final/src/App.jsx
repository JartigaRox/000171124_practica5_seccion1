import Tarjeta from "./components/tarjeta"
import { personas } from "./data/datos"

function App() {
  return (
    <div style ={{padding:"20px", fontFamily:"Arial"}}>
     <h1>Científicos famosos</h1>
     {personas.map((persona, index) => (
      <Tarjeta
        key={index}
        name={persona.name}
        image={persona.image}
        profession={persona.profession}
        awards={persona.awards}
        discoveries={persona.discoveries}
      />
          ))}
    </div>
  );
}

export default App;
