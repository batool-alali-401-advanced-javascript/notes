'use strict';
const minimist = require('minimist');
const Input = require('../lib/input.js');

jest.mock('minimist');

minimist.mockImplementation(()=> {
  return {
    a: 'this is the test',
  };
});

describe('INPUT MODULE', () => {

  describe('Valid()', ()=> {
    it('Valid action and Valid payload', () => {
      const option = new Input();
      option.action = 'a'|| 'add';
      option.payload = 'this is the test';
      expect(option.valid()).toBeTruthy();
    });
    it('Invalid action and Valid payload', () => {
      const option = new Input();
      option.action = false;
      option.payload = 'this is the test';
      expect(option.valid()).toBeFalsy();
    });
    it('Invalid payload and Valid action', () => {
      const option = new Input();
      option.action = 'a'|| 'add';
      option.payload = false;
      expect(option.valid()).toBeFalsy();
    });
    it('Invalid action and Invalid payload', () => {
      const option = new Input();
      option.action = false;
      option.payload = false;
      expect(option.valid()).toBeFalsy();
    });
  });

});