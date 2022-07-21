import "./styles.css";

//Regla de React, cualquier componente de React, se escribe con Mayuscula
const Title = ({ message, titleClass }) => {
  //La variable message es una props
  return <h1 className={`${titleClass} title `}> {message} </h1>;
};

export default function App() {
  return (
    <div className="App">
      <Title titleClass="green" message="Me gusta React" />
      <Title titleClass="blue" message="Me gusta Javascript" />
      <Title titleClass="salmon" message="Me gusta NestJS" />
    </div>
  );
}
