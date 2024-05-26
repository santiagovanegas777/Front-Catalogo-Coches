export interface CharacterInterface {
  _id: number;
  cocheName: string;
  cocheImg: string;
  cocheModel: number;
  cochePower: number;
  cochePrice: number;
  cochefuel: string;
  cocheColor:string
}

export interface CharacterResponseInterface{
  data:{

    nextPage: string;

    prevPage: string;
  };
  coches:CharacterInterface[];

}
