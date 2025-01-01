import { createApiClient } from "./v1";

export { schemas } from "./v1";

export const apiClient = createApiClient("http://localhost:3000/");
