'use strict';
const minimist = require('minimist');

class Input {
  constructor(){

    const argv = minimist(process.argv.slice(2));
    const addAction= Object.keys(argv)[1];
    const catAction= Object.keys(argv)[2];
    if (Object.keys(argv)[2]){
      
      this.action = this.getAction(addAction, catAction);
      this.payload = this.getPayload(argv.a || argv.add, argv.category);
    }
    else{
      this.action=this.getAction(addAction,'category');
      this.payload=this.getPayload(argv.delete || argv.list, 'test');
    }
    
  }
  getAction(action, category){

    let test=false;
    if (((action == 'a' || action =='add') && category== 'category' ) || action=='delete' || action =='list'){
      test =true;
    }
    if (test){
      return action;
    }
    else {
      return false;
    }
  }
  getPayload(note, category){

    let test=true;
    if( (this.action=='add' || this.action=='a') &&(typeof(note)!='string' || note.length==0 || !note.replace(/\s/g, '').length) && (typeof(category)!='string' || category.length==0 || !category.replace(/\s/g, '').length)){
      test=false;
    }
    if (test){
      return [note, category];
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