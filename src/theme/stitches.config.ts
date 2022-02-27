import { createStitches, PropertyValue } from '@stitches/react'
import space from './space'
import sizes from './sizes'
import colors from './colors'
import BREAKPOINTS from './breakpoints'

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
    colors,
    space,
    sizes,
    radii: {
      small: '2px',
      medium: '4px',
      large: '8px',
    },
  },
  media: {
    tablet: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
    laptop: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
    desktop: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
    supportsHover: `(hover: hover) and (pointer: fine)`,
    prefersMotion: `(prefers-reduced-motion: no-preference)`,
    tapOnly: `(pointer: coarse)`,
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
      marginTop: value,
      marginBottom: value,
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
    mozOnly: ({ ...values }: any) => {
      return {
        '@supports (-moz-appearance:none)': { ...values },
      }
    },
    supportsAspectRatio: ({ ...values }: any) => {
      return {
        '@supports (aspect-ratio: 1 / 1)': { ...values },
      }
    },
  },
})
