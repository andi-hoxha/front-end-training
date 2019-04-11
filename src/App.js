/**
 * Created by LeutrimNeziri on 30/03/2019.
 */
import React, {lazy, Suspense} from 'react'
import 'assets/app.css'
import ThemeProvider from '@go-prime/ui/ThemeProvider'
import {Route, Router, Switch} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import Theme from 'utils/Theme'
const history = createBrowserHistory()
const Lecture = lazy(() => import('pages/Lecture'))

const App = ({children}) => {
  let theme = Theme.getTheme()
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router history={history}>
        <Switch>
          <ThemeProvider theme={theme}>
            <Route path="/" exact component={Lecture}/>
            <Route path="/lecture/:id/" exact component={Lecture}/>
          </ThemeProvider>
        </Switch>
      </Router>
    </Suspense>
  )
}

export default App
