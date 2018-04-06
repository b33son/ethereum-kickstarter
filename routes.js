/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/routes.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */

const routes = require('next-routes')();
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/detail');
module.exports = routes;
