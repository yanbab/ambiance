/* LocalStorage wrapper */

class Store {

  prefix = "_";

  constructor(id: string) {
    this.prefix += id;
  }

  get(key: string, defaultValue?: any) {
    return JSON.parse(window.localStorage[key]);
  }

  set(key: string, value: any) {
    window.localStorage[key] = JSON.stringify(value);
  }

}

export default Store;