import Header from 'components/header.js';
import Home from 'components/home.js';
import AppInfo from 'components/appInfo.js';
import Events from 'components/event.js'
import EventsList from 'pages/events_list.js'
import WebpackerReact from 'webpacker-react';


WebpackerReact.setup({Header, Home, AppInfo, Events, EventsList})