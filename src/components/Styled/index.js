import styled from 'styled-components';
import { MdOutlineSchema } from 'react-icons/md';
import { IoLogoJavascript } from 'react-icons/io';
import { BsChevronContract, BsChevronExpand } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import {
  GrGithub,
  GrMysql,
  GrHeroku,
  GrStorage,
  GrNode,
  GrReactjs,
  GrCss3,
  GrHtml5,
  GrMenu,
  GrClose,
  GrArticle,
  GrDomain,
  GrFolder,
} from 'react-icons/gr';

import { DiResponsive } from 'react-icons/di';
import { SiRedux,
  SiSequelize,
  SiExpress,
} from 'react-icons/si';
import { Caret } from './Caret';
import { File } from './File';
import { ImNewTab } from 'react-icons/im';
// import * as GrommetIcons from 'react-icons/gr';
import { FaGithubAlt } from 'react-icons/fa';

const theme = {
  colors: {
    primary: '#000',
    primaryHighlight: '#91b9c8',
    secondary: '#91b9c8',
    transBlack: '#00000097',
    transWhite: '#ffffff97',
    trans: "#00000000",
    paleOrange: '#fef7ee',
    peachy: '#fcf2e3',
    paleGreen: '#f9ffc4',
  },
  sizing: {
    xsmall: '.5rem',
    small: '1rem',
    medium: '50px',
    large: '3rem',
    xlarge: '4rem',
    xxlarge: '5rem',
  },
};

// const iconFamilies = {
//   Grommet: GrommetIcons,
//   FontAwesome: FAIcons,
// };

export const PageIcon = styled(GrArticle)`
width: theme.sizing.medium;
height: theme.sizing.medium;
fill: theme.colors.primary;
`;
export const FolderIcon = styled(GrFolder)`
  width: theme.sizing.medium;
  height: theme.sizing.medium;
  fill: theme.colors.primary;
`;
export const SiteIcon = styled(GrDomain)`
  min-width: theme.sizing.large;
  min-height: theme.sizing.large;
  fill: theme.colors.secondary;
`;
export const Button = styled.button`
  margin: 0 auto;
  background: ${theme.colors.trans};
  border: none;
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const CloseMenuIcon = styled(GrClose)`
  color: green;
  font-size: 3rem;
`;
export const OpenMenuIcon = styled(GrMenu)`
  color: green;
  font-size: 3rem;
`;

export const NewTab = styled(ImNewTab)`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  vertical-align: bottom;
`;
export const CaretIconBlack = styled(Caret)`
  color: ${theme.colors.primary};
`;
export const FileIcon = styled(File)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const ReduxIcon = styled(SiRedux)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const BsChevronContractIcon = styled(BsChevronContract)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const BsChevronExpandIcon = styled(BsChevronExpand)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`
// const GithubAlt = iconFamilies.FontAwesome.FaGithubAlt;
export const GithubIconSmall = styled(FaGithubAlt)`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  vertical-align: bottom;
`;
export const FaGithubIcon = styled(GrGithub)`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  vertical-align: bottom;
`;
export const FiMenuIcon = styled(FiMenu)`
  background: '#00000000';
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const MdCloseIcon = styled(GrClose)`
  background: '#00000000';
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const MenuIcon = styled(FiMenu)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const MySqlDolphin = styled(GrMysql)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const HerokuIcon = styled(GrHeroku)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const SequelizeIcon = styled(SiSequelize)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const DatabaseIcon = styled(GrStorage)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const NodeJS = styled(GrNode)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const ReactJS = styled(GrReactjs)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
  &:hover {
    font-weight: bold;
  }
`;
export const CSS = styled(GrCss3)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const HTML5 = styled(GrHtml5)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;
`;
export const ExpressIcon = styled(SiExpress)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const Javascript = styled(IoLogoJavascript)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const SchemaIcon = styled(MdOutlineSchema)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;
export const ResponsiveIcon = styled(DiResponsive)`
  color: ${theme.colors.primary};
  font-size: 1.5rem;`;

export const StyledSlideMenu = styled.div`
  background: ${theme.colors.paleOrange};
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
`;
export const circleImage = styled.img`
  border-radius: 50%;
  height: ${theme.sizing.medium};
  width: ${theme.sizing.medium};
`;
