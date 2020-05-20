'use strict';

const noteModel = require('./notes-schema.js');

class NoteClass {
  constructor() {}
  create(obj) {
    const newRecord = new noteModel(obj);
    return newRecord.save();
  }
  get(category) {
    if (category) {
      console.log('bbbbb', category);
      return noteModel.find({category:category});
    } else {
      return noteModel.find({});
    }
  }
  update(_id, obj) {
    return noteModel.findByIdAndUpdate(_id, obj, { new: true });
  }
  delete(_id) {
    return noteModel.findByIdAndDelete(_id); 
  }
}
module.exports = new NoteClass();