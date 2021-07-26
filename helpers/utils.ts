import {randomBytes} from 'crypto'

const random = () => randomBytes(4).readUInt32LE(0) / 0x100000000
const randFromArray = <T extends unknown>(array: T[]): T => array[Math.floor(random() * array.length)]
const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1)

export {
  random,
  randFromArray,
  capitalize
}
