export class Light {
  id: number;
  state: boolean;
  name: string;

  constructor(id: number, state: boolean, name: string) {
    this.id = id;
    this.state = state;
    this.name = name;
  }
}
