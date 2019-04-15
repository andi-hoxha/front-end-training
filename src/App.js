/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React, { Suspense } from 'react'
import 'assets/app.css'
import ThemeProvider from 'utils/ThemeProvider'
import {Route, Router, Switch} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
const history = createBrowserHistory()
import Factory from 'pages/Factory'

const App = ({children}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <ThemeProvider>
          <Switch>
              <Route path="/" exact component={Factory}/>
              <Route path="/lecture/:id/" exact component={Factory}/>
          </Switch>
        </ThemeProvider>
      </Router>
    </Suspense>
  )
}

export default App
