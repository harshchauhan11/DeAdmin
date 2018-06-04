export class Retailer {
  rid: number;
  name: string;
  type: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
