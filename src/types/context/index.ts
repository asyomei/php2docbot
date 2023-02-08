import { Context } from "grammy"
import { Chat, User } from "grammy/out/types"
import { I18nFlavor } from "./i18n"

export type MyContext =
    & Context
    & I18nFlavor
