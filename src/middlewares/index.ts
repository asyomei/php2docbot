export { comp as middlewares } from "./composer"

import { Debug } from "utils/debugger"

function using([path]: TemplateStringsArray): void {
    const name = path.replace(".", "middlewares")
    Debug.log(`import "${name}"`)
    require(path)
}

using `./drop-update`
using `./sequentialize`
using `./api-throttler`
using `./auto-thread`
using `./i18n`
