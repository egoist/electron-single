const { app } = require('electron')

module.exports = mainWindow => {
  const isSecondInstance = app.makeSingleInstance(() => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) {
        mainWindow.restore()
      }

      mainWindow.show()
    }
  })

  if (isSecondInstance) {
    app.quit()
  }
}
