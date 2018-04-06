import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';


const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x14133A0B9bD74bC5abae77F7E27edE4D26D6cDEa'
);

export default instance;