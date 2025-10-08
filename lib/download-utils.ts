export const downloadFileFromStorage = async (fileUrl: string, fileName: string) => {
  try {
    // Fetch the file from the storage URL
    const response = await fetch(fileUrl)
    
    if (!response.ok) {
      throw new Error(`Failed to download file: ${response.statusText}`)
    }
    
    // Get the blob data
    const blob = await response.blob()
    
    // Create a blob URL
    const blobUrl = window.URL.createObjectURL(blob)
    
    // Create a temporary link and trigger download
    const link = document.createElement('a')
    link.href = blobUrl
    link.download = fileName
    
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    // Clean up the blob URL
    window.URL.revokeObjectURL(blobUrl)
  } catch (error) {
    console.error('Error downloading file:', error)
    // Fallback: try opening in new tab
    window.open(fileUrl, '_blank')
  }
}
