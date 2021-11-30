



function createCells(cellBrand, screenSize, batCapacity) {

  return {
    cellBrand,
    screenSize,
    batCapacity
  }
}

const cell01 = createCells('Samsung', 5.1, 9000)
const cell02 = createCells('Apple', 6.8, 7000)
const cell03 = createCells('Huawei', 7.6, 9000)
const cell04 = createCells('Xiaomi', 6.3, 4000)
const cell05 = createCells('OPPO', 4.2, 5000)
const cell06 = createCells('Lenovo', 7.0, 4000)
const cell07 = createCells('LG', 5.3, 7000)
const cell08 = createCells('NOKIA', 5.3, 5000)

console.log(cell01, cell02, cell03, cell04, cell05, cell06, cell07, cell08)
console.log('Have a nice day !')
