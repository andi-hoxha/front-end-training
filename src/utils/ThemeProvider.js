import React from 'react'
import { MuiThemeProvider as ThemeProviderMaterialUI, createMuiTheme } from '@material-ui/core/styles'
import Theme from 'utils/Theme'
import 'normalize.css'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
// pick a date util library
import MomentUtils from '@date-io/moment'

class ThemeProvider extends React.Component {
    render() {
        const {children, theme: themeProp} = this.props
        let theme = createMuiTheme(Theme.getTheme())
        console.log('theme', theme)
        return (
            <ThemeProviderMaterialUI theme={themeProp || theme}>
                <MuiPickersUtilsProvider utils={MomentUtils}>
                    {children}
                </MuiPickersUtilsProvider>
            </ThemeProviderMaterialUI>
        )
    }
}
export default ThemeProvider