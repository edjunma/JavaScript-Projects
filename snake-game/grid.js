const GRID_SIZE = 21;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_SIZE) + 1
    y: Math.floor(MAth.random() * GRID_SIZE) + 1
  }
}