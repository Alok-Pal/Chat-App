import express from 'express';

const serverRoute = express();

serverRoute.get('/', (() => { console.log("in"); }))

export default serverRoute;