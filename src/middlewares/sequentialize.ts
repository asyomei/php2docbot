import { comp } from "./composer"
import { sequentialize } from "@grammyjs/runner"
import { MyContext } from "types/context"
import { Debug } from "utils/debugger"

function constraints(ctx: MyContext): string | undefined {
    Debug.log(`update ${ctx.update.update_id}: ${ctx.from?.id}`)
    return ctx.from?.id.toString()
}

comp.use(sequentialize(constraints))
