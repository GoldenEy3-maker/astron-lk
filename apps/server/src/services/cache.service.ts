import { BASE_URL, PUBLIC_URL } from "../app";

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
    const data = await fetch(`${BASE_URL}/${PUBLIC_URL}users.json`);
    const json = await data.json();
    this.data.users = json;
  }

  async loadNews() {
    const data = await fetch(`${BASE_URL}/${PUBLIC_URL}news.json`);
    const json = await data.json();
    this.data.news = json;
  }

  async loadCompanies() {
    const data = await fetch(`${BASE_URL}/${PUBLIC_URL}companies.json`);
    const json = await data.json();
    this.data.companies = json;
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
