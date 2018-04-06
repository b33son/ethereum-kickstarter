/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/new.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */

import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Form, Button, Checkbox, Input, Message } from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

export default class CampaignNew extends Component {
  state = {
    minContribution: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async () => {
    event.preventDefault();
    console.log('submitted');

    try {
      this.setState({ errorMessage: '' });
      this.setState({ loading: true });
      const accounts = await web3.eth.getAccounts();
      console.log('accounts[0]: ', accounts[0]);
      await factory.methods.createCampaign(this.state.minContribution)
        .send({ from: accounts[0] });

      Router.pushRoute('/');
    } catch (error) {
      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false });
  }

  render() {
    return (
      <Layout>
        <h3>Create a campaign</h3>


        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum Contribution</label>
            <Input
              label="wei"
              labelPosition="right"
              value={this.state.minContribution}
              onChange={event => this.setState({ minContribution: event.target.value })}
            />
          </Form.Field>
          <Message error header="Oops" content={this.state.errorMessage} color='teal' />
          <Button primary type='submit' loading={this.state.loading}>Create</Button>

        </Form>

      </Layout>
    );
  }
}
