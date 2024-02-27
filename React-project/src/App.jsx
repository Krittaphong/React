import Contact from './assets/Contact'
import Counter from './assets/Counter'
import Hello from './assets/Hello'

function App() {
  const helloData = [
    {name: 'สุดหล่อ', message: 'Hi there'},
    {name: 'สุดสวย', message: 'Hello....'}
  ]
  return (
    <div className='App'>
      <Counter />
      {helloData.map((data,index) => (
        <Hello key = {index} name={data.name} message={data.message} />
      ))}
      <Contact email="Emailคนหล่อ888@gmail.com" phone="088-888-8888" />
    </div>
  )
}

export default App