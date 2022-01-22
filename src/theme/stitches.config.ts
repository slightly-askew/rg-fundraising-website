import { createStitches, PropertyValue } from '@stitches/react'
import { space, sizes } from './space'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      gray400: 'gainsboro',
      gray500: 'lightgray',
      black: '#202020',
      white: '#ffffff',
      light: '#f8f8f8',
    },
    space,
    sizes,
  },
  media: {
    tablet: '(min-width: 500px)',
    desktop: '(min-width: 1200px)',
  },
  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mx: (value: PropertyValue<'marginTop'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: PropertyValue<'marginTop'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    mt: (value: PropertyValue<'marginTop'>) => ({ marginTop: value }),
    mr: (value: PropertyValue<'marginRight'>) => ({ marginRight: value }),
    mb: (value: PropertyValue<'marginBottom'>) => ({ marginBottom: value }),
    ml: (value: PropertyValue<'marginLeft'>) => ({ marginLeft: value }),
    p: (value: PropertyValue<'padding'>) => ({
      padding: value,
    }),
    px: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    pt: (value: PropertyValue<'marginTop'>) => ({ paddingTop: value }),
    pr: (value: PropertyValue<'marginRight'>) => ({ paddingRight: value }),
    pb: (value: PropertyValue<'marginBottom'>) => ({ paddingBottom: value }),
    pl: (value: PropertyValue<'marginLeft'>) => ({ paddingLeft: value }),
    size: (value: PropertyValue<'height'>) => ({
      height: value,
      width: value,
    }),
    tlbr: (value: PropertyValue<'top'>) => {
      return {
        top: value,
        left: value,
        bottom: value,
        right: value,
      }
    },
    textGradient: (value: string) => {
      return {
        backgroundImage: value,
        '-moz-background-clip': 'text',
        '-webkit-background-clip': 'text',
        '-moz-text-fill-color': 'transparent',
        '-webkit-text-fill-color': 'transparent',
      }
    },
    moz: (value: any) => {
      return {
        '@supports (-moz-appearance:none)': value,
      }
    },
  },
})
