import { globalCss } from './stitches.config'

export const globalStyles = globalCss({
  /* Box sizing rules */
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  /* Allow percentage based heights in the application */
  'html, body': {
    height: '100%',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, avenir next, avenir, segoe ui, helvetica neue, helvetica, Ubuntu, roboto, noto, arial, sans-serif',
  },

  /* Remove default margin */
  'body, h1, h2, h3, h4, p, figure, blockquote, dl, dd': {
    margin: 0,
  },

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  "ul[role='list'], ol[role='list']": {
    listStyle: 'none',
  },

  /* Set core root defaults */
  'html:focus-within': {
    scrollBehavior: 'smooth',
  },

  /* Set core body defaults */
  body: {
    '-webkit-font-smoothing': 'antialiased',
    textRendering: 'optimizeSpeed',
    lineHeight: 1.5,
  },

  /* A elements that don't have a class get default styles */
  'a:not([class])': {
    textDecorationSkipInk: 'auto',
  },

  /* Make media easier to work with */
  'img, picture, video, canvas, svg': {
    maxWidth: '100%',
    display: 'block',
  },

  /* Inherit fonts for inputs and buttons */
  'input, button, textarea, select': {
    font: 'inherit',
  },

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  '@media (prefers-reduced-motion: reduce)': {
    'html:focus-within': {
      scrollBehavior: 'auto',
    },

    '*, *::before, *::after': {
      animationDuration: '0.01ms !important',
      animationIterationCount: '1 !important',
      transitionDuration: '0.01ms !important',
      scrollBehavior: 'auto !important',
    },
  },

  /* Create a root stacking context */
  '#root, #__next': {
    height: 'inherit',
    isolation: 'isolate',
    position: 'relative',
    '& > *': {
      height: 'inherit',
    },
  },

  /* Avoid text overflows */
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
})
