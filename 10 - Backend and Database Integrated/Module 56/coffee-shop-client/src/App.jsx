import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const fetchedCoffee = useLoaderData();
  console.log(fetchedCoffee)

  return (
    <>
      <h1>Total Coffee- {fetchedCoffee.length}</h1>

      <div className='grid md:grid-cols-2 gap-8'>
        {
          fetchedCoffee.map(coffee => (
            <CoffeeCard 
            key={coffee._id}
            coffee={coffee}
            />
          ))
        }
      </div>
    </>
  )
}

export default App
