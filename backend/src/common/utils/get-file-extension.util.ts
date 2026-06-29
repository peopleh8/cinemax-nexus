export const getFileExtension = (name: string): string | null => {
  const lastDotIndex = name.lastIndexOf('.')

  if (lastDotIndex === -1 || lastDotIndex === name.length - 1) {
    return null
  }

  return name.substring(lastDotIndex + 1)
}
