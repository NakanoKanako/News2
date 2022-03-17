import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Top } from './Top'
import { TopNews } from './TopNews'
import { GridData } from './GridData'
import { Recommend } from './Recommend'
import { styled } from '@mui/material'

export const Router = () => {

  return (
    <Switch>
      <Route exact path="/">
        <Top />
      </Route>
      <Route path="/topnews">
        <TopNews />
      </Route>
      <Route path="/grid">
        <GridData />
      </Route>
      <Route path="/recommend">
        <Recommend />
      </Route>
    </Switch>
  )
}
