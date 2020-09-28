declare module '@golobal' {
  export interface AntdInputEvent {
    target: {
      value: string
    }
  }
  export interface HelloWorld {
    msg?: string
  }

  export interface AntdInputProps {
    onChange: (e: AntdInputEvent) => void
    style?: string
    msg: string
  }
}