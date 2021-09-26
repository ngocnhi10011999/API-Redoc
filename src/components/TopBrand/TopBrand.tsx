// import * as React from 'react';
// import { LogoWrap, LinkWrap, LogoImgEl } from './styled.elements';

// export class TopBrand extends React.PureComponent {
//   render() {
//     const { info } = this.props;
//     const logoInfo = info['x-logo'];
//     if (!logoInfo || !logoInfo.url) {
//       return null;
//     }
//     const logoHref = logoInfo.href || (info.contact && info.contact.url);
//     const altText = logoInfo.altText ? logoInfo.altText : 'logo';
//     const logo = <LogoImgEl src={logoInfo.url} alt={altText} />;
//     return (
//         <LogoWrap>
//             {logoHref ? LinkWrap(logoHref)(logo) : logo}
//         </LogoWrap>
//     );
//   }
// }
