import { ServiceBase } from './apiBase';
import { Pokemon } from 'models';
import { DefaultResponse } from './DefaultResponse';

export default class PokemonService extends ServiceBase {
  static next: string;

  static async Find() {
    return this._find('pokemon');
  }

  static async FindNext() {
    return this._find(this.next);
  }

  private static async GetDetails(data: Array<any>) {
    const request = data.map((x: any) => this.instance.get(x.url));
    const result = await Promise.all(request);

    return result.map((x) => ({
      ...x.data,
      types: x.data.types.map((y) => y.type.name),
    }));
  }

  private static async _find(url: string) {
    const data = (await this.instance.get<DefaultResponse<Pokemon[]>>(url)).data;
    this.next = data.next;
    const result = await this.GetDetails(data.results);

    console.log(result);

    return result;
  }

  static async FindOne(data: number | string) {
    return <Array<any>>(await this.instance.get(`pokemon/${data}`)).data;
  }
}
