
import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    
    palette: {
      common: {
        black: string
        white: string
      }
      background: {
        main: string
        secondary: string
      }
      primary: IPalette
      secondary: IPalette
   }
  }
}
