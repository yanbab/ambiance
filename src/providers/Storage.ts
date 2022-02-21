
const Store = {

  get(key: string) {
    return JSON.parse(window.localStorage[key]);
  },

  set(key: string, value: any) {
    window.localStorage[key] = JSON.stringify(value);
  }

}

export default Store;