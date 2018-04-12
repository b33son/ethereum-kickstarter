/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/ContributeForm.js
 */

import React, { Component } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';
import Campaign from "../ethereum/campaign";
import web3 from "../ethereum/web3";
import { Router } from '../routes';
// https://react.semantic-ui.com/collections/form#form-example-form
export default class ContributeForm extends Component {

  state = {
    value: '',
    loading: false,
    errorMessage: ''
  };

  onSubmit = async (event) => {
    event.preventDefault();
    this.setState({ errorMessage: '' });
    this.setState({ loading: true });
    console.log('this.props.address');
    console.log(this.props.campaignAddress);
    const campaign = Campaign(this.props.campaignAddress);

    try {
      const accounts = await web3.eth.getAccounts();
      await campaign.methods.contribute().send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });


      Router.replaceRoute(`/campaigns/${this.props.campaignAddress}`);
    } catch (error) {
      console.log(error);

      this.setState({ errorMessage: error.message });
    }
    this.setState({ loading: false });
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
        <Form.Field>
          <label >Amount to Contribute</label>
          <Input
            value={this.state.value}
            onChange={event => this.setState({ value: event.target.value })}
            label="ether" labelPosition="right" />
        </Form.Field>
        <Message error header="Oops" content={this.state.errorMessage} color='teal' />
        <Button primary loading={this.state.loading}>Contribute</Button>
      </Form>
    );
  }
}
