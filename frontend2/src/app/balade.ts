export class Balade {
  NOM_BALADE: string;
  DATE_DEPART: string;
  LIEU_RDV: string;
  ID_BALADE?: number;

  constructor(NOM_BALADE: string, DATE_DEPART: string, LIEU_RDV: string, ID_BALADE?: number) {
      this.NOM_BALADE = NOM_BALADE;
      this.DATE_DEPART = DATE_DEPART;
      this.LIEU_RDV = LIEU_RDV;
      this.ID_BALADE = ID_BALADE;
  }
}