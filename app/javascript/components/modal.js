import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Events from './event.js';
import Map from './map.js';
import GoogleMap from 'google-map-react';

const customStyles = {
  content : {
    top    : '65em',
    left   : '50%',
    right  : '100px',
    bottom : 'auto',
    marginRight : '-50%',
    transform : 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255,255,255,.93)',
    color : '#2D2D2D'
  },
  overlay : {
    height            : '100%',
    minWidth          : '300px',
    // position          : 'absolute',
    overflow          : 'scroll',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(114, 28, 119, .6)',
  }
};

export default class Pop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalIsOpen: false,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    this.subtitle.style.color = '#2D2D2D';
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className="event-list-buttons" onClick={this.openModal}>More Info</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            ariaHideApp={false}
          >


          <button className="modal_button" onClick={this.closeModal}>close</button>
          <h2 ref={subtitle => this.subtitle = subtitle}>{this.props.title}</h2>
          <p>{this.props.venue}</p>
          <p>{this.props.time}</p>
          <p>{this.props.address}</p>
          <p>{this.props.city}</p>
          <p>{this.props.country_abbr}</p>
          <p>{this.props.postal}</p><br />
          <p>{this.props.description}</p><br />
          <form action="/attendances" method="post">
            <input type="hidden" value={this.props.title} name="title" />
            <input type="hidden" value={this.props.time} name="date" />
            <input type="hidden" value={this.props.venue} name="venue" />
            <input type="hidden" value={this.props.id} name="eventful_identifier" />

            <input className="modal_button" type="submit" value="Add to profile!" />
          </form>
          <Map
            latitude={this.props.latitude}
            longitude={this.props.longitude}
            title={this.props.title}
          />
        </Modal>
      </div>
    )}
  }
