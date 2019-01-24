export class Keg {
  name: string = "";
  brand: string = "";
  price: number = 0;
  pricePint: number = 0;
  alcoholContent: number = 0;
  ibu: number = 0;

  constructor(public params) {
    this.name = params.name;
    this.brand = params.name;
    this.price = params.price;
    this.pricePint = params.pricePint;
    this.alcoholContent = params.alcoholContent;
    this.ibu = params.ibu;
  }
}
