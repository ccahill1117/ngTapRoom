export class Keg {
  name: string = "";
  brand: string = "";
  price: number = 0;
  pricePint: number = 0;
  alcoholContent: number = 0;
  ibu: number = 0;
  pintsLeft: number = 124;

  constructor(public params) {
    this.name = params.name;
    this.brand = params.brand;
    this.price = parseInt(params.price);
    this.pricePint = parseInt(params.pricePint);
    this.alcoholContent = parseInt(params.alcoholContent);
    this.ibu = parseInt(params.ibu);
  }
}
