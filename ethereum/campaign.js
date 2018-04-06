/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/ethereum/campaign.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */

import web3 from './web3';
import Campaign from './build/Campaign.json';

export default (address) => {
  return new web3.eth.Contract(JSON.parse(Campaign.interface), address);
};