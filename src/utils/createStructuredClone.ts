export default function createStructuredClone(objectToClone: any): any {
  const stringified: string = JSON.stringify(objectToClone);
  const parsed = JSON.parse(stringified);
  return parsed;
}
