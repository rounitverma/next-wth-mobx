import { action, makeObservable, observable } from "mobx";
import { toJS } from "mobx";
import axios from "axios";

class DataStore {
  data = { id: "fetching..." };

  constructor() {
    makeObservable(this, {
      data: observable,
      fetchDataFromServer: action,
    });
  }
  async fetchDataFromServer() {
    // get data from server
    // use setData action to set the data
    //this.setData({ id: 5 });
    let num = Math.floor(Math.random() * 200);
    let res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
    //let response = res.json;
    //this.setData({ id: res });
    let response = res.data[num].title;
    this.setData({ id: response });
  }

  async setData(_data) {
    this.data = _data;
  }
}

export default DataStore;
