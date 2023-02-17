import { Dark } from 'quasar'

export const useDarkStore = () => {
  const cookie: string = localStorage.getItem('isDark') ?? 'true'
  const isDark: boolean = cookie === 'true'

  console.log(`[Dark Mode]: ${isDark}`)

  Dark.set(isDark)

  watch(
    () => Dark.isActive,
    (newValue: boolean) => {
      localStorage.setItem('isDark', newValue.toString())
    }
  )
}
