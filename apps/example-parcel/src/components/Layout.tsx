import { Global } from '@emotion/react';
import React from 'react';
import { CSSReset, tokens } from '../design-system';
import { Providers } from '../providers';

export const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <CSSReset />
      <Global
        styles={`
          body {
            background: ${tokens.colors.background};
            transition: background 0.5s ease-out;
          }
      `}
      />
      <Providers>{children}</Providers>
    </React.Fragment>
  );
};
