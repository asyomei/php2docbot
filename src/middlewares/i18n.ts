import { comp } from "./composer"
import { i18n } from "utils/i18n"

comp.use((ctx, next) => {
    ctx.t = i18n.getFixedT(ctx.from?.language_code ?? "en")
    return next()
})
