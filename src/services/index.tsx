import AxiosInstance from "./AxiosInstace";

export class InventoryService {
  async createInventory() {
    const url = "/inventory/";
    const errors = [];

    try {
      AxiosInstance.post(url);
    } catch (error) {
      errors.push(error);
    }
  }

  async getInventory() {
    const url = "/inventory/";
    const errors = [];

    try {
      AxiosInstance.get(url);
    } catch (error) {
      errors.push(error);
    }
  }

  async updateInventory() {
    const url = "/inventory/";
    const errors = [];

    try {
      AxiosInstance.patch(url);
    } catch (error) {
      errors.push(error);
    }
  }

  async deleteRequest() {
    const url = "/inventory/";
    const errors = [];

    try {
      AxiosInstance.delete(url);
    } catch (error) {
      errors.push(error);
    }
  }
}

export class UserService {
  async login() {
    const url = "/user/token/";
    const errors = [];

    try {
      AxiosInstance.post(url);
    } catch (error) {
      errors.push(error);
    }
  }

  async createUser() {
    const url = "/users/";
    const errors = [];

    try {
      AxiosInstance.post(url);
    } catch (error) {
      errors.push(error);
    }
  }

  async deleteUser() {
    const url = "/user/";
    const errors = [];

    try {
      AxiosInstance.delete(url);
    } catch (error) {
      errors.push(error);
    }
  }

  async updateUser() {
    const url = "/user/";
    const errors = [];

    try {
      AxiosInstance.patch(url);
    } catch (error) {
      errors.push(error);
    }
  }
}
