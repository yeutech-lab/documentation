import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyleGuideRenderer from '@rollup-umd/documentation/lib/Layout';
import theme from '../theme';
import badgeYeutech from '../static/badge-yeutech';
import LogoYeutech from '../static/logo-yeutech.svg';

export default class LayoutRenderer extends Component {
  static defaultProps = {
    theme: theme,
    ga: process.env.GA_ID_YEUTECH_DOCUMENTATION || process.env.GA_ID,
    logoMenu: {
      logo: <LogoYeutech />,
      href: null,
      alt: 'Yeutech Company Limited logo',
    },
    logoFooter: {
      logo: badgeYeutech,
      href: null,
      alt: 'Yeutech Company Limited logo',
    },
  };

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
    const { ...rest } = this.props;
    return (
      <StyleGuideRenderer {...rest} />
    );
  }
}
