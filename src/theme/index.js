import { makeTheme as makeThemeDocumentation } from '@rollup-umd/documentation/lib/theme';

/**
 * generate the yeutech theme
 */
const theme = makeThemeDocumentation({
  _name: 'yeutech-documentation',
  '$btn-primary-color': '#B31255',
  '$btn-primary-bg': '#1C00ff00',
  '$btn-primary-border': '#1C00ff00',
  '$btn-box-shadow': '#1C00ff00 !important',
  '$headings-font-family': '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
  '$headings-font-weight': 'normal',
  '$font-size-h1': '36px',
  '$font-size-h2': '30px',
  '$font-size-h3': '24px',
  '$font-size-h4': '20px',
  '$font-size-h5': '18px',
  '$font-size-h6': '16px',
  '$headings-line-height': '2',
  '$headings-color': 'inherit',
  '$link-color': '#3A007D',
  '$link-decoration': 'none',
  '$link-hover-color': '#B31255',
  '$link-hover-decoration': 'none',
  '$code-color': '#333',
  '$table-cell-padding': '0',
  '$table-border-width': '0',
  styleguide: {
    '$nav-styleguide-bg-color': 'white',
    '$nav-styleguide-border': '1px solid #CCC',
    '$nav-styleguide-width': {
      sm: '100%',
      md: '260px',
    },
  },
});

/** @public Bootstrap Styled makeTheme */
export const makeTheme = toMakeTheme(theme);

/** @public yeutech theme */
export default theme;
