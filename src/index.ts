import chalk from 'chalk'
import figlet from 'figlet'
import clear from 'clear'
import { spawnSync } from 'child_process'

const isWinPlatform: boolean = /^win/.test(process.platform)
const command_npx: string = isWinPlatform ? 'npx.cmd' : 'npx'

clear()

// logo
console.log(chalk.magenta(figlet.textSync('AdoNuxt')))

// setup NuxtJs
spawnSync(command_npx, ['create-nuxt-app', 'client'], { stdio: 'inherit' })


// setup AdonisJs
spawnSync(command_npx, ['create-adonis-ts-app', 'server'], { stdio: 'inherit' })