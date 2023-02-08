import { comp } from "./composer"
import { MyContext } from "types/context"
import { Debug } from "utils/debugger"

function checkUpdate(ctx: MyContext): boolean {
    return true
}

comp.use((ctx, next) => {
    if (checkUpdate(ctx))
        return next()
    Debug.log(`update ${ctx.update.update_id} was dropped`)
})
