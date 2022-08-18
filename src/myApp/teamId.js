import React from 'react'
import { Link, useParams } from 'react-router-dom';

export const TeamId = () => {
    let { teamId } = useParams();
  return (
    <div>
        <p>TeamId</p>
        <p>TeamId</p>
        <p>TeamId</p>
        <p>TeamId</p>
        <p>TeamId</p>
        <p>{teamId}</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}
