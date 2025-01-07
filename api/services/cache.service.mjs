import fs from "fs/promises";

export default new (class CacheService {
  constructor() {
    this.data = {
      users: [],
      news: [],
      companies: [],
    };
  }

  async loadAll() {
    await Promise.all([
      this.loadUsers(),
      this.loadNews(),
      this.loadCompanies(),
    ]);
  }

  async loadUsers() {
    const data = await fs.readFile("api/schemas/users.json");
    this.data.users = JSON.parse(data);
  }

  async loadNews() {
    const data = await fs.readFile("api/schemas/news.json");
    this.data.news = JSON.parse(data);
  }

  async loadCompanies() {
    const data = await fs.readFile("api/schemas/companies.json");
    this.data.companies = JSON.parse(data);
  }

  updateCache(type, newData) {
    if (!this.data[type]) {
      throw new Error(`Invalid cache type: ${type}`);
    }
    this.data[type] = newData;
  }

  getData() {
    return this.data;
  }
})();
