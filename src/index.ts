import chalk from 'chalk'
import figlet from 'figlet'
import clear from 'clear'

clear()

console.log(
  chalk.magenta(
    figlet.textSync('AdoNuxt', { horizontalLayout: 'full' })
  )
)