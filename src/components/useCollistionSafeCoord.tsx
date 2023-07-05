import { GUTTER_SIZE } from '../constants';
import ModuleInterface, { CoordInterface } from '../types/ModuleInterface';

export default function useCollistionSafeCoord() {
  const isModuleOverlapping = (module1: CoordInterface, module2: CoordInterface) => {
    const rectangle1 = [module1.x, module1.y, module1.x + module1.w, module1.y + module1.h];
    const rectangle2 = [module2.x, module2.y - GUTTER_SIZE, module2.x + module2.w, module2.y + module2.h + GUTTER_SIZE];
    const widthIsPositive = Math.min(rectangle1[2], rectangle2[2]) > Math.max(rectangle1[0], rectangle2[0]);
    const heightIsPositive = Math.min(rectangle1[3], rectangle2[3]) > Math.max(rectangle1[1], rectangle2[1]);

    return (widthIsPositive && heightIsPositive);
  };

  const isModuleCollistionSafe = (newModule: ModuleInterface, modules: ModuleInterface[]): boolean => {
    for (let { coord, id } of modules) {
      if (id !== newModule.id && isModuleOverlapping(newModule.coord, coord)) {
        return false;
      }
    }

    return true;
  };

  return { isModuleCollistionSafe };
}
