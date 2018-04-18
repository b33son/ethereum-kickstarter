/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/RequestRow.js
 */

import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";
import web3 from "../ethereum/web3";
import Campaign from "../ethereum/campaign";

export default class RequestRow extends Component {
  //   function approveRequest(uint index) public {

  approveRequest = async event => {
    // need to get campaign
    // call approveRequest(uint index)
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods
      .approveRequest(this.props.id)
      .send({ from: accounts[0] });
  };

  finalizeRequest = async event => {
    console.log("finalize request started");
    const campaign = Campaign(this.props.address);
    const accounts = await web3.eth.getAccounts();
    await campaign.methods
      .finalizeRequest(this.props.id)
      .send({ from: accounts[0] });
  };

  render() {
    const { Row, Cell } = Table;
    const { id, request, approversCount } = this.props;
    const readyToFinalize = request.approvalCount > approversCount / 2;
    return (
      <Row
        disabled={request.complete}
        positive={readyToFinalize && !request.complete}
      >
        <Cell>{id}</Cell>
        <Cell>{request.description}</Cell>
        <Cell>{web3.utils.fromWei(request.value, "ether")}</Cell>
        <Cell>{request.vendorAddress}</Cell>
        <Cell>
          {request.approvalCount} / {approversCount}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button onClick={this.approveRequest} basic color="green">
              Approve
            </Button>
          )}
        </Cell>
        <Cell>
          {request.complete ? null : (
            <Button onClick={this.finalizeRequest} basic color="blue">
              Finalize
            </Button>
          )}
        </Cell>
      </Row>
    );
  }
}
