import { Bot, GrammyError } from "grammy"
import { MyContext } from "types/context"
import { inspect } from "util"
import { Debug } from "utils/debugger"
import { BOT_TOKEN } from "./env"

export const bot = new Bot<MyContext>(BOT_TOKEN)

const MESSAGE_IS_NOT_MODIFIED = "Bad Request: message is not modified"

bot.catch(({ ctx, error, stack }) => {
    if (error instanceof GrammyError && error.description.startsWith(MESSAGE_IS_NOT_MODIFIED)) {
        return
    }
    const msg = ["Unexpected Error:"]
    stack && msg.push(stack)
    msg.push(inspect(error, false, null, true))
    msg.push(inspect(ctx, false, null, true))
    Debug.error(msg.join("\n"))
})
