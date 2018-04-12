/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/detail.js
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm'
import { Link } from '../../routes';

export default class CampaignDetail extends Component {

  static async getInitialProps(props) {
    const address = props.query.address;
    const campaign = Campaign(address);
    const summary = await campaign.methods.getSummary().call();

    return {
      campaignAddress: props.query.address,
      minContribution: summary[0],
      campaignBalance: summary[1],
      spendRequestsCount: summary[2],
      approversCount: summary[3],
      managerAddress: summary[4]
    };
  }

  renderCards() {
    const { minContribution, campaignBalance, spendRequestsCount, approversCount, managerAddress } = this.props;
    console.log('in detail: this.props.campaignAddress');
    console.log(this.props.campaignAddress);
    const items = [
      {
        header: managerAddress,
        meta: 'Address of manager',
        description: 'The creator of the campaign. Creates requests to withdraw money',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: minContribution,
        meta: 'Minimum Contribution (in wei)',
        description: 'This campaign requires at least this amount from each contributor',
        //style: { overflowWrap: 'break-word' }
      },
      {
        header: spendRequestsCount,
        meta: 'Spend Request Count',
        description: 'The number of spend requests created for this campaign',
        //style: { overflowWrap: 'break-word' }
      },
      {
        header: approversCount,
        meta: 'Approver Count',
        description: 'The number of eligable approvers for this campaign',
        //style: { overflowWrap: 'break-word' }
      },
      {
        header: web3.utils.fromWei(campaignBalance, 'ether'),
        meta: 'Campaign Balance (in ether)',
        description: 'The current funds available on this contract for spend requests',
        //style: { overflowWrap: 'break-word' }
      },
    ];

    // https://react.semantic-ui.com/views/card#card-example-group-props
    return <Card.Group items={items} />;
  }

  // https://react.semantic-ui.com/collections/grid#grid-example-column-width
  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>

        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}

            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm campaignAddress={this.props.campaignAddress}></ContributeForm>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Link route={`/campaigns/${this.props.campaignAddress}/requests`} >
                <a>
                  <Button primary>View Requests</Button>
                </a>
              </Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </Layout>
    )
  }
};
