'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
// const TheNotes = require('./history.js');
const theNotes = require('./models/notes-collection.js');
const MONGODB_URI = process.env.MONGODB_URI;
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

class Note {
  constructor(){

    this.ID;
    this.note;
  }
  execute (action,note) {
    if (action=='add'|| action=='a' && note)   {
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

    if (action=='list'){
      this.list(note[0]);
    }
    if (action=='delete'){
      this.delete(note[0]);
    }
  }

  async add (note) {
    let newNote = {
      text: note[0],
      category: note[1],
    };
    this.ID= Math.floor(Math.random()*100);
    this.note= note[0];
    console.log('Note Saved  ', note[0]);

    // const mongo = async (newNote) => {
    // const myNote = new theNotes(newNote);
    await theNotes.create(newNote);

    // await note.save();
    mongoose.disconnect();
    // };
    // mongo(newNote);
  }
  async list(category){
    if(typeof(category)=='string'){
      console.log('find one' , category);
      const record = await theNotes.get(category);
      record.forEach(el=>{
        console.log(`${el.text}
        Category: ${el.category}    ID: ${el.id}
        ----------------------------------------------------`);
      });
      console.log('----------------------------------------------------');
    }else{
      const notes = await theNotes.get();
      notes.forEach(el=>{
        console.log(`${el.text}
        Category: ${el.category}    ID: ${el.id}
        ----------------------------------------------------`);
      });
    }
    mongoose.disconnect();
  }

  async delete(id){
    await theNotes.delete({_id: id});
    console.log(`Deleted Note ${id}`);
    mongoose.disconnect();
  }
  
}






module.exports = Note;