export function makePathWithParams(URLPattern: string, params: object): string {
  let resultURL = URLPattern;
  for (const [key, value] of Object.entries(params)) {
    resultURL = resultURL.replace(`:${key}`, value);
  }
  return resultURL;
}
