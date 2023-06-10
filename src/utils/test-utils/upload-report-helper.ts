import {fireEvent} from '@testing-library/dom'
import { InputHTMLAttributes } from 'react'

export function uploadFiles(input: HTMLInputElement, files: File[]) {
  Object.defineProperty(input, 'files', {
    value: files,
    configurable: true,
  })

  Object.defineProperty(input, 'value', {
    set(newValue) {
      if (!newValue && input.files) {
        (input as any).files.length = 0
      }
    },
  })

  fireEvent.change(input, {
    target: {
      files,
    },
  })
}
