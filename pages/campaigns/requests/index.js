/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/pages/campaigns/requests/index.js
 */

import React, { Component } from "react";
import Layout from "../../../components/Layout";
import { Button, Table } from "semantic-ui-react";
import { Link } from "../../../routes";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow";

export default class RequestIndex extends Component {
  static async getInitialProps(context) {
    const { address } = context.query;
    const campaign = Campaign(address);
    const requestsCount = await campaign.methods.getRequestsCount().call();
    const approversCount = await campaign.methods.approversCount().call();

    // * Solidity does not support returning arrays of structs yet
    //  * This does not work!!!
    ///   function getAllRequests() public view returns (Request[]) {
    //      return requests;
    //    }
    //    * ​Instead, we have the length of the spendRequest array, so we can request each spendRequest one-by-one

    const requests = await Promise.all(
      Array(parseInt(requestsCount))
        .fill()
        .map((element, index) => {
          return campaign.methods.spendRequests(index).call(); //  returns an individual request
        })
    );

    // Example:
    // Array(5).fill('XY').map( (element, index) => element + '#' + index)
    //  > (5) ["XY#0", "XY#1", "XY#2", "XY#3", "XY#4"]

    return { address, requests, requestsCount, approversCount };
  }

  renderRows() {
    return this.props.requests.map((request, index) => {
      return (
        <RequestRow
          key={index}
          id={index}
          request={request}
          address={this.props.address}
          approversCount={this.props.approversCount}
        />
      );
    });
  }
  render() {
    const { Header, Row, HeaderCell, Body, Cell } = Table;

    console.log(this.props);
    return (
      <Layout>
        <h3>Requests</h3>
        <Link route={`/campaigns/${this.props.address}/requests/new`}>
          <a>
            <Button primary floated="right" style={{ marginBottom: 10 }}>
              Add Request
            </Button>
          </a>
        </Link>

        <Table>
          <Header>
            <Row>
              <HeaderCell>ID</HeaderCell>
              <HeaderCell>Description</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
              <HeaderCell>Recipient</HeaderCell>
              <HeaderCell>Approval Count</HeaderCell>
              <HeaderCell>Approve</HeaderCell>
              <HeaderCell>Finalize</HeaderCell>
            </Row>
          </Header>
          <Body>
            {/* <Row>
              <Cell>ID</Cell>
              <Cell>Description</Cell>
              <Cell>Amount</Cell>
              <Cell>Recipient</Cell>
              <Cell>Approval Count</Cell>
              <Cell>Approve</Cell>
              <Cell>Finalize</Cell>
            </Row> */}
            {this.renderRows()}
          </Body>
        </Table>
        <div>Found {this.props.requestsCount} requests.</div>
      </Layout>
    );
  }
}
