import fs from "fs/promises";

type CacheData = {
  users: any[];
  news: any[];
  companies: any[];
};

export default new (class CacheService {
  private data: CacheData = {
    users: [],
    news: [],
    companies: [],
  };

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
    const data = await fs.readFile("public/users.json");
    this.data.users = JSON.parse(String(data));
  }

  async loadNews() {
    const data = await fs.readFile("public/news.json");
    this.data.news = JSON.parse(String(data));
  }

  async loadCompanies() {
    const data = await fs.readFile("public/companies.json");
    this.data.companies = JSON.parse(String(data));
  }

  updateCache(type: keyof CacheData, newData: any[]) {
    if (!this.data[type]) {
      throw new Error(`Invalid cache type: ${type}`);
    }
    this.data[type] = newData;
  }

  getData() {
    return this.data;
  }
})();
