export const GenerateRandomString = (len) => len > 4
  ? GenerateRandomString(len - 4).concat(Math.random().toString(36).substring(1, 5))
  : Math.random().toString(36).substring(1, len) // can generate up to 5 chars

export const ScrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

export const GetViewportSize = () => ({
  height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
  width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
})
