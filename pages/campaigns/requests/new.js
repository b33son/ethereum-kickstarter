/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/new.js
 */

import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';

export default class RequestNew extends Component {

  state = {
    value: '',
    description: '',
    recipient: ''
  }
  static async getInitialProps(props) {
    const { address } = props.query;
    return { address };
  }

  onSubmit = async (event) => {
    event.preventDefault();
    const campaign = Campaign(this.props.address);
    const { description, value, recipient } = this.state;

    try {
      const accounts = await web3.eth.getAccounts();
      const val = web3.utils.toWei(value, 'ether');
      await campaign.methods
        .createRequest(description, val, recipient)
        .send({ from: accounts[0] });
    }
    catch (error) {
      console.log(error);
      // set error message in state
    }
  }

  render() {
    return (
      <Layout>
        <h3>Create A New Request</h3>
        <Form onSubmit={this.onSubmit}>

          <Form.Field>
            <label>Description</label>
            <Input value={this.state.description} onChange={event => this.setState({ description: event.target.value })} />
          </Form.Field>

          <Form.Field>
            <label>Requested Amount in Ether</label>
            <Input value={this.state.value} onChange={event => this.setState({ value: event.target.value })} />
          </Form.Field>

          <Form.Field>
            <label >Recipient</label>
            <Input value={this.state.recipient} onChange={event => this.setState({ recipient: event.target.value })} />
          </Form.Field>

          <Button>Create</Button>
        </Form>
      </Layout>
    )
  }
};
