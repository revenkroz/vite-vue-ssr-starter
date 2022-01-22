export type Component = any
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: Component
  pageProps: Record<string, unknown>
  initialState: any

  // set by server
  url: string
  cookies: Map<string, string>
  userAgent: string
}
