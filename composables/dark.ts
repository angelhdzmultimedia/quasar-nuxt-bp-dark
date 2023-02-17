export const useDark = () => {
  const cookie = localStorage.getItem('darkMode') || '{"isActive": false}'
  const darkMode = JSON.parse(cookie)
  const isActive = ref(darkMode.isActive)
  Dark.set(isActive.value)

  function set(value: boolean) {
    Dark.set(value)
    localStorage.setItem(
      'darkMode',
      JSON.stringify({
        isActive: value,
      })
    )
  }

  function toggle() {
    isActive.value = !isActive.value
    set(isActive.value)
  }
  return {
    toggle,
    isActive,
  }
}
