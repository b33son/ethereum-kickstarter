//  kickstarter/test/Campaign.test.js
//    includes test for CampaignFactory

const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3'); //  Web3 is a constructor so it's capitalized

const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
  accounts = await web3.eth.getAccounts();

  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ from: accounts[0], gas: '1000000' });

  await factory.methods.createCampaign('100')
    .send({ from: accounts[0], gas: '1000000' });

  //  getDeployedCampaigns() is a view so use call
  //  [campaignAddress] is ES2016 for campaignAddress = array[0]
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  //  Get deployed campaign at campaignAddress and create an instance
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );

});

describe('Campaigns', () => {
  it('deploys a factory and campaign', () => {
    assert.ok(factory.options.address);
    assert.ok(campaign.options.address);
  });
});