import * as React from 'react';
import styled from '../../styled-components';

export const LogoImgEl = styled.img`
  max-height: calc(${props => props.theme.logo.maxHeight} - 100px);
  max-width: calc(${props => props.theme.logo.maxWidth} - 100px);
  padding: ${props => props.theme.logo.gutter};
  width: 100%;
  display: block;
`;

export const LogoWrap = styled.div`
  display: flex;
  position: relative;
  z-index: 999;
  width: 100%;
  height: 64px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(10, 14, 29, 0.08);
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: var(--font-weight-base);
  line-height: var(--line-height-base);
  color: var(--text-color);
  text-align: left;
  -webkit-font-smoothing: antialiased;
  text-size-adjust: 100%;
  text-rendering: optimizespeed !important;
  font-family: 'Roboto';
  font-size: 15px;
`;

export const LogoBrand = styled.div`
  display: flex;
  width: calc(var(--sidebar-width) + 32px);
  padding: 16px 0 16px 16px;
`

export const VersionDropDown = styled.div`
  margin-left: auto;
  position: relative;
`

export const DropDownLink = styled.span`
  display: block;
  height: 32px;
  padding: 2px 8px 2px 76px;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: color var(--transition);
  white-space: nowrap;
`

const Link = styled.a`
  display: inline-block;
`;

// eslint-disable-next-line react/display-name
export const LinkWrap = url => Component => <Link href={url}>{Component}</Link>;
