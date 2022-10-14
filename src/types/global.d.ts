/*
 * @author GennadySX
 * @created at 2022
 **/

declare global {
  function log(message?: any, ...optionalParams: any[]): void
}

let _global = global as NodeJS.Global
_global.log = function (message?: any, ...optionalParams: any[]): void {
  console.log('\x1b[43m\x1b[5m', message, '\x1b[0m', optionalParams?.join(' '))
}
