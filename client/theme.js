import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    // changes main color palette to blue, contrastText to red
    palette: {
      primary: {
      light: '#8e8e8e',
      main: '#1D15FF',
      dark: '#373737',
      contrastText: '#FC001B',
    },
    secondary: {
      light: '#ffad42',
      main: '#FC001B',
      dark: '#bb4d00',
      contrastText: '#fffde7',
    },
      openTitle: '#455a64',
      protectedTitle: '#f57c00',
      type: 'light'
    }
  })

  export default theme