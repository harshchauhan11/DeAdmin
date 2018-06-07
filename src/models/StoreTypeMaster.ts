export class StoreTypeMaster {
  sid: number;
  type: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
