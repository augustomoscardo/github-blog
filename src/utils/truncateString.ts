export function truncateString(text: string, caracterAmount: number) {
  if (text.length > caracterAmount) {
    return text.slice(0, caracterAmount) + '...'
  }

  return text
}