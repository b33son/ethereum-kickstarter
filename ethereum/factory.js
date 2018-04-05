import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x6d003B07CB779D6F9749Af8bb4bE20E771BDeEcD'
);

export default instance;