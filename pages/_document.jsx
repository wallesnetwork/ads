import Document, { Head, Main, NextScript } from "next/document";
export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link
            rel="stylesheet"
            type="text/css"
            charset="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link
            href="https://unpkg.com/normalize.css@^7.0.0"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/@blueprintjs/core@^3.0.0/lib/css/blueprint.css"
            rel="stylesheet"
          />
          <link
            href="https://unpkg.com/@blueprintjs/icons@^3.0.0/lib/css/blueprint-icons.css"
            rel="stylesheet"
          />
          <link href="/static/style.css" rel="stylesheet" />
          <script src="https://unpkg.com/react-transition-group@^2.2.1/dist/react-transition-group.min.js" />
          <script src="https://unpkg.com/popper.js@^1.14.1/dist/umd/popper.js" />
          <script src="https://unpkg.com/react-popper@^1.0.0/dist/index.umd.min.js" />
          <script src="https://unpkg.com/@blueprintjs/core@^3.0.0" />
          <script src="https://unpkg.com/@blueprintjs/icons@^3.0.0" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
