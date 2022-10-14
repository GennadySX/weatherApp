/*
 * @author GennadySX
 * @created at 2022
 **/

import {useCallback} from 'react'

export const useDebounce = () =>
  useCallback((func: (text: string) => void) => {
    let timer: ReturnType<typeof setTimeout>
    return function (...args: any) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        clearTimeout(timer)
        func.apply(null, args)
      }, 500)
    }
  }, [])
