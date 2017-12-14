import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Events from './event.js';
import GoogleMap from 'google-map-react';

const customStyles = {
  content : {
    top    : '50%',
    left   : '50%',
    right  : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)'
  }
};

export default class Pop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button onClick={this.openModal}>Open Modal</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >
          <button onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>
          <p>{this.props.venue}</p>
          <p>{this.props.time}</p>
          <p>{this.props.address}</p>
          <p>{this.props.city}</p>
          <p>{this.props.country_abbr}</p>
          <p>{this.props.postal}</p>
          <p>{this.props.description}</p>
          <div style={{width: '600px', height: '400px'}}>
            <GoogleMap
              bootstrapURLKeys={{key: this.props.googleApiKey}}
              center={[32.7096298,-117.1602029]}
              zoom={18}
            >
            </GoogleMap>
          </div>
          <button>Add to Profile</button>
        </Modal>
      </div>
    )}
  }
