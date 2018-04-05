/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/index.js
 * Last Modified: Wednesday April 4th 2018 12:48:28 pm
 */
import React from 'react';
import { Card, Button } from "semantic-ui-react";
import factory from '../ethereum/factory';
import Layout from '../components/layout';

class CampaignIndex extends React.Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();
    return { campaigns };
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      }
    });

    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css"></link>

          <h3>Open Campaigns</h3>
          {this.renderCampaigns()}
          <Button
            content="Create Campaign"
            icon="add circle"
            primary
          />
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;