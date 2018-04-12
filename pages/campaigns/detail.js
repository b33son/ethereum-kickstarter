/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card } from 'semantic-ui-react';

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

  renderCards() {
    const { minContribution, campaignBalance, spendRequestsCount, approversCount, managerAddress } = this.props;

    const items = [
      {
        header: managerAddress,
        meta: 'Address of manager',
        description: 'The creator of the campaign. Creates requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },

    ];

    // https://react.semantic-ui.com/views/card#card-example-group-props
    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        {this.renderCards()}
      </Layout>
    )
  }
};
