'use strict';
function Note() {
    this.ID;
    this.note;
};

Note.prototype.execute = function (action,note) {
    if (action && note)   {
        this.add(note);
    } 
    else {
        console.log("Unvaild Command... try $ node notes.js [-a || --add] '<any note>' ");
        console.log('Your note must be within quotes');
        console.log('PS. Unvalid empty string or only whitespaces');
    }
};


Note.prototype.add = function (note) {
    this.ID= Math.floor(Math.random()*100);
    this.note= note;
    console.log('Note Saved  ', note);
};


module.exports = Note;