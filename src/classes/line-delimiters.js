class LineDelimiters {
  constructor (Events, DataConverter, colors) {
    const events = new Events()
    this.addLinesDelimiters = events.addLinesDelimiters
    this.removeLinesDelimiters = events.removeLinesDelmiters

    const dataConverter = new DataConverter()
    this.convertHexToRgba = dataConverter.convertHexToRgba

    this.colors = colors
  }

  init () {
    this.bringPageElements()
    this.bringColors()
    this.insertEventsToElements()
  }

  bringPageElements () {
    this.elements = document.querySelectorAll('*')
  }

  bringColors () {
    const elements = Array.from(this.elements)
    let targetIndex = 0
    elements.forEach((element, index) => {
      if (targetIndex >= this.colors.length) {
        targetIndex = 0
      }
      this.colors[index] = this.colors[targetIndex]
      targetIndex++
    })
  }

  async insertEventsToElements () {
    await Array.from(this.elements).reduce(async (acc, element) => {
      await acc
      const randomIndex = Math.floor(Math.random() * (50 - 0)) + 0

      element.onmouseover = () => {
        this.addLinesDelimiters(element, this.convertHexToRgba(this.colors[randomIndex]))
      }
      element.onmouseleave = () => {
        this.removeLinesDelmiters(element, this.convertHexToRgba(this.colors[randomIndex]))
      }
    }, Promise.resolve())
  }
}

export default LineDelimiters
