/*
 * File: /Users/michaelbeeson/Documents/VSCode/ethereum/kickstarter/components/layout.js
 * Last Modified: Thursday April 5th 2018 8:54:38 am
 */

import React from 'react';

export default (props) => {
  return (
    <div>
      <h1>I'm a header</h1>
      {props.children}
      <h1>I'm a footer</h1>
    </div>
  )
};
