#!/usr/bin/env node


var express = require('express');
var basicAuth = require('basic-auth-connect');
var Agenda = require('agenda');
var Agendash = require('agendash');

const TITLE = process.env.TITLE || 'Agendash';
var app = express();
var agenda = new Agenda({db: {address: process.env.MONGO_URI}});

app.use(basicAuth(process.env.USER_NAME || 'admin', process.env.PASSWORD));
app.use('/', Agendash(agenda, {middleware: 'express', title: TITLE}));

app.listen(process.env.PORT || 3000);

module.exports = app;
