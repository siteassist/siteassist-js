import type { paths } from "types";
import createFetchClient from "openapi-fetch";

export const getFetchClient = (apiUrl = "https://api.siteassist.io") => {
  return createFetchClient<paths>({
    baseUrl: `${apiUrl}/v1`,
  });
};
