/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js
 */

import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Button } from 'semantic-ui-react';
import { Link } from '../../../routes';
export default class RequestIndex extends Component {

  static async getInitialProps(context) {
    const { address } = context.query;
    return { address };
  }

  render() {
    console.log(this.props);
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary>Add Request</Button>
          </a>
        </Link>
      </Layout>
    );
  }
}
