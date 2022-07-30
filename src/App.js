// import logo from "./logo.svg";
import "./App.css";
import Testimonio from "./componentes/Testimonio";

function App() {
  return (
    <div className="App">
      <header>
        <h1>freecodecamp</h1>
      </header>
      <main className="contenedor-principal">
        <p id="titulo">Testimonios:</p>
        <Testimonio
          imagen="RobertDowneyJr.jpeg"
          prefijo="El es "
          nombre="Robert Downey Jr"
          puesto="Iron Man"
          frase="Yo soy Iron Man"
        />
        <Testimonio
          imagen="LabrujaScarlata.jpg"
          prefijo="Ella es "
          nombre="Elizabeth Olsen ♥"
          puesto="La Bruja Scarlata"
          frase="Rompes las reglas y te conviertes en un héroe… Yo lo hago y me vuelvo el enemigo… No suena justo ¿verdad?."
        />
        <Testimonio
          imagen="AmericaChavez.jpg"
          prefijo="Ella es "
          nombre="Xochitl Gomez"
          puesto="Ms America"
          frase="Regla número uno del viaje en el multiverso: no sabes nada."
        />
        <Testimonio
          imagen="DoctorStrange.jpg"
          prefijo="El es "
          nombre="Benedict Cumberbatch"
          puesto="Doctor Strange"
          frase="Sé bien lo que es sufrir, el dolor es un viejo amigo."
        />
        <Testimonio
          imagen="Groot.jpg"
          prefijo="El es "
          nombre="Vin Diesel"
          puesto="Groot"
          frase="Yo soy Groot."
        />
      </main>

      <footer>
        <p>Todos los derechos reservados © </p>
      </footer>
    </div>
  );
}

export default App;
