import { observer } from 'mobx-react';
import * as React from 'react';
import { OpenAPIInfo } from '../../types';
import { LinkWrap, LogoImgEl, LogoWrap, LogoBrand, VersionDropDown, DropDownLink } from './styled.elements';

@observer
export class ApiLogo extends React.Component<{ info: OpenAPIInfo }> {
  render() {
    const { info } = this.props;
    const logoInfo = info['x-logo'];
    if (!logoInfo || !logoInfo.url) {
      return null;
    }

    const logoHref = logoInfo.href || (info.contact && info.contact.url);

    // Use the english word logo if no alt text is provided
    const altText = logoInfo.altText ? logoInfo.altText : 'logo';

    const logo = <LogoImgEl src={logoInfo.url} alt={altText} />;
    return (
      <LogoWrap style={{ backgroundColor: logoInfo.backgroundColor }}>
        <LogoBrand>
          <div>
            <a href="/">
              {logoHref ? LinkWrap(logoHref)(logo) : logo}
            </a>
          </div>
          <VersionDropDown>
            <DropDownLink>
              v1
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5">
                <path d="M2578,146.988l2.99-2.991,1,1-3.99,3.992L2574.01,145l1-1Z" transform="translate(-2574 -144)"></path>
              </svg>
            </DropDownLink>
          </VersionDropDown>

        </LogoBrand>
        
      </LogoWrap>
    );
  }
}
