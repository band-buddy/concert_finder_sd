import Header from 'components/header.js';
import Home from 'components/home.js';
import AppInfo from 'components/appInfo.js';
import Events from 'components/event.js'
import EventsList from 'pages/events_list.js'
import Footer from 'components/footer.js'
import About from 'components/about.js'
import SignedIn from 'components/signedin.js'
import Map from 'components/map.js'
import Pin from 'components/pin.js'
import Pop from 'components/modal.js'
import WebpackerReact from 'webpacker-react';

WebpackerReact.setup({Header, Home, AppInfo, Footer, Events, EventsList, About, SignedIn, Map, Pin, Pop})
