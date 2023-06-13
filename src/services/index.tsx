import AxiosInstance from "./AxiosInstace";

export class InventoryService {
  async createInventory() {
    const url = "";
    const errors = [];

    try {
      AxiosInstance.post(url);
    } catch (error) {
      errors.push(error);
    }
  }
}
