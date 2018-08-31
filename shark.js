#!/usr/bin/env node
'use strict';
const argv = require('yargs').argv;
const Create = require('./actions/create');
const Delete = require('./actions/delete');
const List = require('./actions/list');
const { Init } = require('./actions/init');
const { initAccount, callMatchingMethod } = require('./util');
const updateNotifier = require('update-notifier');
const pkg = require('./package.json');
const notifier = updateNotifier({ pkg });

notifier.notify({ isGlobal: true });

initAccount();

if (config.has('do_api_access_token')) {
  switch (argv._[0]) {
    case 'create':
      callMatchingMethod(Create, argv._[1]);
      break;
    case 'delete':
      callMatchingMethod(Delete, argv._[1]);
      break;
    case 'list':
      callMatchingMethod(List, argv._[1]);
      break;
    default:
      Init();
      break;
  }
}
