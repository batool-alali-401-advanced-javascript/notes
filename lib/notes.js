'use strict';
class Note {
  constructor(){

    this.ID;
    this.note;
  }
  execute (action,note) {
    if (action && note)   {
      this.add(note);
    } 
    if (!action) {
      console.error('Invaild Command... try $ node notes.js [-a || --add] <any note>' );
    }
    if (!note){
      console.error('invalid note');
      console.error('Your note must be within quotes');
      console.error('PS. Invalid empty string or only whitespaces');
    }
  }

  add (note) {
    this.ID= Math.floor(Math.random()*100);
    this.note= note;
    console.log('Note Saved  ', note);
  }
}





module.exports = Note;