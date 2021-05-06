import React from 'react';
import {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  default as NextDocument,
} from 'next/document';

export interface DocumentProps {}

class Document extends NextDocument<DocumentProps> {
  static async getInitialProps({ renderPage }: DocumentContext) {
    return renderPage();
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
