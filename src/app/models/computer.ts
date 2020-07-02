export class Computer {

  id: number;
  modele: string;
  marque: string;
  type: string;
  category: string;
  prixAchat: number;
  prixVente: number;
  dateEntreStock: Date;

    constructor(id: number, modele: string, marque: string, type: string, category: string, prixAchat: number, prixVente: number, dateEntreStock: Date) {
    this.id = id;
    this.modele = modele;
    this.marque = marque;
    this.type = type;
    this.category = category;
    this.prixAchat = prixAchat;
    this.prixVente = prixVente;
    this.dateEntreStock = dateEntreStock;
  }


}
