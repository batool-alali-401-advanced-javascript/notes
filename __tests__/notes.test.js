'use strict';
const Note = require('../lib/notes.js');


jest.spyOn(global.console, 'log');

describe('Execute()', () => {
  it('Nothing is logged to the console if there was no command given', ()=> {
    const note = new Note();
    note.execute();
    expect(console.log).not.toHaveBeenCalled();
  });

  it('logs the note and add it when execute() is called with valid action and payload', ()=> {
    const option = {action:'a' , payload: 'testing....'};
    const note = new Note(option);
    note.execute(option.action,option.payload);
    expect(console.log).toHaveBeenCalled();
  });
});