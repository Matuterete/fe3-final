import React from 'react'
import { useContext } from '../utils/Context';
import Card from '../Components/Card'

const Home = () => {
  const { state } = useContext()

  return (
    <main>
      <h1>Home</h1>
      <div className='card-grid'>
        {state.dentists.map((dentist) => (
          <Card key={dentist.id} dentist={dentist} />
        ))}
      </div>
    </main>
  )
}

export default Home