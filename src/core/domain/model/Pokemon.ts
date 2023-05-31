export interface Pokemon {
  name: string;
  index: number;
  imgUrl: string;
  types: {
    firstType: string;
    secondType?: string;
  };
  weight: number;
  height: number;
  description: string;
}
