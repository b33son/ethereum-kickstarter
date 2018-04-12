/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/routes.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson
 */

const routes = require('next-routes')();
routes
  .add('/campaigns/new', '/campaigns/new')
  .add('/campaigns/:address', '/campaigns/detail')
  .add('/campaigns/:address/requests', '/campaigns/requests/index');
module.exports = routes;
