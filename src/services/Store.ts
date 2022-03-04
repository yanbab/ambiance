/* LocalStorage wrapper */

class Store {

  prefix = "_";

  constructor(id: string) {
    this.prefix += id;
  }

  get(key: string, defaultValue?: any) {
    const saved = localStorage.getItem("name");

    const data = JSON.parse(saved + "");
    return data[key] || defaultValue;
  }

  set(key: string, value: any) {
    const data = JSON.parse(window.localStorage[this.prefix]);
    data[key] = value;
    window.localStorage[this.prefix] = JSON.stringify(data);
  }

}

export default Store;