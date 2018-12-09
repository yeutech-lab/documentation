import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleGuideRenderer from '@rollup-umd/documentation/lib/Layout';
import theme from '../theme';
import badgeYeutech from '../static/badge-yeutech';
import LogoYeutech from '../static/logo-yeutech.svg';

const defaultProps = {
  theme,
  ga: process.env.GA_ID,
  logoMenu: {
    logo: <LogoYeutech />,
    href: null,
    alt: 'Yeutech Logo',
  },
  logoFooter: {
    logo: badgeYeutech,
    href: 'https://www.yeutech.vn',
    alt: 'Yeutech Logo',
  },
};

export default class LayoutRenderer extends Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = defaultProps;

  static propTypes = {
    /** Our edited theme */
    theme: PropTypes.object,
    /** Google analytics configuration */
    ga: PropTypes.shape({
      /** Google analytics id */
      id: PropTypes.string,
    }),
    /** Logo to use in sidebar menu */
    logoMenu: PropTypes.shape({
      logo: PropTypes.node,
      href: PropTypes.string,
      alt: PropTypes.string,
    }),
    /** Logo to use in footer */
    logoFooter: PropTypes.shape({
      logo: PropTypes.node,
      href: PropTypes.string,
      alt: PropTypes.string,
    }),
  };

  render() {
    const { logoMenu, logoFooter, ...rest } = this.props;
    return (
      <StyleGuideRenderer
        logoMenu={{
          ...defaultProps.logoMenu,
          ...logoMenu,
        }}
        logoFooter={{
          ...defaultProps.logoFooter,
          ...logoFooter,
        }}
        {...rest}
      />
    );
  }
}
