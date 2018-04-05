//  ethereum/web3.js

import Web3 from 'web3';

// const web3 = new Web3(window.web3.currentProvider);
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // browser
  web3 = new Web3(window.web3.currentProvider);
}
else {
  // server or the user is not running Metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/7UFOqzP5nOuSOUL53akU'
  );
  web3 = new Web3(provider);
}

export default web3;