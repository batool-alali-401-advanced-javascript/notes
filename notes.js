'use strict';
const Input = require('./lib/input.js');
const Notes = require('./lib/notes.js');

const input = new Input();
const note = new Notes();
note.execute(input.action, input.payload);
