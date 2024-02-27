import Contact from "./assets/Contact"
import Hello from "./assets/Hello"
import Counter from "./assets/Counter";

function App() {

  const helloData = [
    {name: "Mike", surname: "Brow"},
    {name: "Bob", surname: "Swagger"}
  ];

  return (
    <div className='App'>
        < Counter />
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message}/>
        ))}

        <Contact email="krittaphong2546@gmail.com" phone ="0985535297"/>
    </div>
  );
}

export default App
