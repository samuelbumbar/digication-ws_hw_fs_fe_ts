export interface CoordInterface {
  x: number;
  y: number;
  w: number;
  h: number;
}

export default interface ModuleInterface {
  id: number;
  coord: CoordInterface;
}
