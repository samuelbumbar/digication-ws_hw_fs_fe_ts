import { COLUMN_WIDTH, GUTTER_SIZE, PAGE_MARGIN_TOP } from './constants';

export const moduleW2LocalWidth = (moduleW: number) => moduleW * COLUMN_WIDTH - GUTTER_SIZE;
export const moduleX2LocalX = (moduleX: number) => moduleW2LocalWidth(moduleX) + GUTTER_SIZE * 2;
export const moduleY2LocalY = (moduleY: number) => moduleY + GUTTER_SIZE;
export const localY2ModuleY = (localY: number) => localY - GUTTER_SIZE;
export const globalY2ModuleY = (localY: number) => localY - GUTTER_SIZE - PAGE_MARGIN_TOP;
export const computeGridColumnUnit = (x: number) => Math.round(x / COLUMN_WIDTH) * COLUMN_WIDTH + GUTTER_SIZE;
