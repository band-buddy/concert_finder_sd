import React, { Component } from 'react';

export default class Modal extends Component {
  constructor(props) {
    super(props)
    this.state = { isModalOpen: false }
  }

  render() {
    return (
      <p>Test</p>
    )
  }
}
