/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
export default class CampaignDetail extends Component {

  static async getInitialProps(props) {
    const address = props.query.address;
    const campaign = Campaign(address);
    const summary = await campaign.methods.getSummary().call();

    return {
      minContribution: summary[0],
      campaignBalance: summary[1],
      spendRequestsCount: summary[2],
      approversCount: summary[3],
      managerAddress: summary[4]
    };
  }

  render() {
    return (
      <Layout>


      </Layout>
    )
  }
};
