'use strict';
const minimist = require('minimist');

class Input {
  constructor(){

    const argv = minimist(process.argv.slice(2));
    const addAction= Object.keys(argv)[1];
    this.action = this.getAction(addAction);
    this.payload = this.getPayload(argv.a || argv.add);
  }
  getAction(action){

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
  }
  getPayload(note){

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
  }
  valid () {
    return (this.action && this.payload);
  }
}
  

  
module.exports = Input;