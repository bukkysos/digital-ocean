import React from 'react'
import { Link } from 'react-router-dom'

export const LeagueStandings = () => {
  return (
    <>
      <div>LeagueStandings</div>
      <Link to="/teams/new">Go to Team (with 'new' sublink)</Link>
    </>
  )
}
