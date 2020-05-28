'use strict';
require('@code-fellows/supergoose');

const minimist = require('minimist');
const Note = require('../lib/notes.js');
const Collection = require('../lib/models/notes-collection.js');


jest.spyOn(global.console, 'log');
jest.mock('minimist');


minimist.mockImplementation(() => {
  return {
    add: 'Finised lab4',
    category:'Labs',
  };
});


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


describe('Create and list ', () => {
 
  
  it('create() create a new record and added it in the database', () => {
    let myNote = {
      text: 'a new note',
      category : 'testing',
    };
    return Collection.create(myNote).then(record=>{
      Object.keys(myNote).forEach(el=>{
        expect(myNote[el]).toEqual(record[el]);
      });
    });
  
  });
  it('list() returns an records which its category is  testing', () =>{
    const note = new Note();
    let note1={
      text: 'fist',
      category: 'testing',
    };
    let note2={
      text: 'second',
      category: 'testing',
    };
    let note3={
      text: 'third',
      category: 'testing...',
    };
    note.add(note1);
    note.add(note2);
    note.add(note3);
    note.list('testing');
    expect(console.log).toHaveBeenCalled();
  });
  it('list() returns returns all records', () =>{
    const note = new Note();
    let note1={
      text: 'fist',
      category: 'testing',
    };
    let note2={
      text: 'second',
      category: 'testing',
    };
    let note3={
      text: 'third',
      category: 'testing...',
    };
    note.add(note1);
    note.add(note2);
    note.add(note3);
    note.list();
    expect(console.log).toHaveBeenCalled();
  });

  
});
