'use strict'

import React from 'react';
import ReactDOM from 'react-dom'
import { OpenApiSwagger, HostConfig, HostGraph } from './components/zabbix-react-component'
//import { OpenApiSwagger, HostConfig, HostGraph } from 'zabbix-react-component'            // from node_modules

window.localStorage.setItem('token', 'test')


const specUrl = 'http://localhost:8002/spec/swagger.json'
const swg = new OpenApiSwagger(specUrl)

swg.connect((client, err) => {
  if (err) {
    ReactDOM.render(
      <div className='std-win'>no spec - <a href={specUrl}>{specUrl}</a> !</div>,
      document.getElementById('root')
    )
  }
  else {
    ReactDOM.render(
      <div>
        <HostConfig swgClient={client} headerTxt='HostConfig component' />
        <HostGraph swgClient={client} headerTxt='HostGraph component' />
      </div>,
      document.getElementById('root')
    )
  }
})