import {LogEntrySchema} from "~/server/models/logEntry.schema";

export default defineEventHandler(async (event)=>{
    console.log('triggerd')
    const body = await readBody(event)
    console.log(body)
    return await new LogEntrySchema({
        ...body
    }).save()
})