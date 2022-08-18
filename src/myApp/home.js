import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {

  return (
    <>
      <div>Home</div>
      <Link to="/teams">Go to LeagueStandings (Team's index route)</Link>
    </>
  )
}
