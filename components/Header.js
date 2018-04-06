/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/header.js
 * Created Date: Thursday April 5th 2018
 * Modified By: M.Beeson at b33son@gmail.com
 */

import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu style={{ marginTop: "10px" }}>
      <Menu.Item>
        <Link route="/" >
          <a >Ethereum Kickstarter</a>
        </Link>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Link route="/"><a >Campaigns</a></Link>
        </Menu.Item>
        <Menu.Item>
          <Link route="/campaigns/new"><a >+</a></Link>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
};


