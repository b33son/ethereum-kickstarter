/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/server.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */

// server.js
const next = require('next');
const { createServer } = require('http');
const routes = require('./routes');
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handler = routes.getRequestHandler(app);

// // With express
// const express = require('express')
// app.prepare().then(() => {
//   express().use(handler).listen(3000)
// })

// Without express
app.prepare().then(() => {
  createServer(handler).listen(3000,
    (err) => {
      if (err) throw err;
      console.log('Ready on localhost:3000')
    })
})