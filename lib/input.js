'use strict';
const minimist = require('minimist');

function Input() {
  const argv = minimist(process.argv.slice(2));
  const addAction= Object.keys(argv)[1];
  this.action = this.getAction(addAction);
  this.payload = this.getPayload(argv.a || argv.add);
}
  
Input.prototype.getAction = function (action) {
  let test=false;
  if (action == 'a' || action =='add'){
    test =true;
  }
  if (test){
    return action;
  }
  else {
    return false;
  }
};

Input.prototype.getPayload = function (note) {
  let test=true;
  if( typeof(note)!='string' || note.length==0 || !note.replace(/\s/g, '').length){
    test=false;
  }
  if (test){
    return note;
  }
  else{
    return false;
  }
};
  
module.exports = Input;