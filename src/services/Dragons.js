import axios from 'axios';

export default class {
  constructor() {
    this.endpoint = process.env.REACT_APP_API_ENDPOINT;
  }

  getDragons() {
    return axios.get(`${this.endpoint}/dragon`);
  }

  getDragonById(id) {
    return axios.get(`${this.endpoint}/dragon/${id}`);
  }

  createDragon(dragon) {
    return axios.post(`${this.endpoint}/dragon`, dragon);
  }

  updateDragon(dragon) {
    return axios.put(`${this.endpoint}/dragon/${dragon.id}`, dragon);
  }

  deleteDragon(id) {
    return axios.delete(`${this.endpoint}/dragon/${id}`);
  }
}
