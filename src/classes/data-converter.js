class DataConverter {
  convertHexToRgba (value) {
    const hexValue = value.replace('#', '')
    const [r, g, b] = hexValue.match(/.{1,2}/g)
    const redToInt = parseInt(r, 16)
    const greenToInt = parseInt(g, 16)
    const blueToInt = parseInt(b, 16)
    const color = `rgba(${redToInt}, ${greenToInt}, ${blueToInt}, 0.5)`
    return color
  }
}

export default DataConverter
