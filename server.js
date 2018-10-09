import express from 'express';
import path from 'path';
import React from 'react';
import {renderToString} from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { StoreProvider } from './src/store';
import App from './src/App';

const appServer = express();

appServer.use( express.static( path.resolve( __dirname, "../build" ) ) );

appServer.get( "/*", ( req, res ) => {
    const context = {};
    const jsx = (
        <StoreProvider>
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter> 
        </StoreProvider>
    );
    const reactDom = renderToString( jsx );

    res.writeHead( 200, { "Content-Type": "text/html" } );
    res.end( htmlTemplate( reactDom ) );
} );

appServer.listen( 2048 );

function htmlTemplate( reactDom ) {
    return `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        
        <body>
            <div id="app">${ reactDom }</div>
            <script src="./app.bundle.js"></script>
        </body>
        </html>
    `;
}