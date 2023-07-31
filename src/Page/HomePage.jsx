import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1>вітаю в щасливій телефонній книзі, яка дарує посмішки після реєстрації</h1>
      <Link to='/login'>Тисни сюди для реєстрації</Link>
     
      <Link to='/registration'>Тисни сюди, якщо зареєстрована (ий)</Link>
      
    </div>
  )
}

export default HomePage
