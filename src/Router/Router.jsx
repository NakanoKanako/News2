import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Top } from './../components/Top';
import { TopNews } from './../components/TopNews';
import { GridData } from './../components/GridData';
import { NewsDialog } from '../components/NewsDialog';

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
      <Route path="/dialog">
        <NewsDialog />
      </Route>
    </Switch>
  )
}
