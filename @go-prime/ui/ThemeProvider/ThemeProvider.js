/**
 * Created by LeutrimNeziri on 21/02/2019.
 */
import React from "react"
import {ThemeProvider as ThemeProviderMaterialUI, StylesProvider} from "@material-ui/styles"
import Theme from "ui/utils/Theme"
import preset from 'jss-preset-default'
import {create} from 'jss'
import "normalize.css"
class ThemeProvider extends React.Component {
  render() {
    const {children, theme: themeProp} = this.props
    const theme = Theme.getTheme()
    let jss = create(preset())
    return (
      <StylesProvider jss={jss}>
        <ThemeProviderMaterialUI theme={themeProp || theme}>
          {children}
        </ThemeProviderMaterialUI>
      </StylesProvider>
    )
  }
}

export default ThemeProvider
