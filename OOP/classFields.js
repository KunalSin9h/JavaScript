'use strict';

class Account {
  /*1. Public Fields (instance) */
  locale = navigator.language;
  /* 2. Private Fields */
  #movements = [];
  #pin;

  constructor(pin){
    this.#pin = pin;
  }

  static #helper(){
    console.log("#helper");
  }

  /* Private Methods (instance) */
  #showPin(){
    console.log(this.#pin);
  }

  /* Public Methods */
  printLocale(){
    console.log(this.locale);
  }
  getPin(){
    this.#showPin();
    Account.#helper();
  }
}
console.dir(Account);