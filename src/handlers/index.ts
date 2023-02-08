export { comp as handlers } from "./composer"

import { Debug } from "utils/debugger"

function using([path]: TemplateStringsArray): void {
    const name = path.replace(".", "handlers")
    Debug.log(`import "${name}"`)
    require(path)
}

