import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MyApp } from './myApp'
import { Home } from './myApp/home'
import { LeagueStandings } from './myApp/leagueStandings'
import { NewTeamForm } from './myApp/newTeamForm'
import { Team } from './myApp/team'
import { TeamId } from './myApp/teamId'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyApp />}>
                    <Route index element={<Home />} />
                    <Route path="teams" element={<Team />}>
                        <Route path=":teamId" element={<TeamId />} />
                        <Route path="new" element={<NewTeamForm />} />
                        <Route index element={<LeagueStandings />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
