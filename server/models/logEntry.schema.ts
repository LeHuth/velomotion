import {defineMongooseModel} from "#nuxt/mongoose";
import {LogEntry} from "~/types";

export const LogEntrySchema = defineMongooseModel<LogEntry>({
    name:'LogEntry',
    schema:{
        trafficLightId:{
            type:'number',
            required:true,
        },
        value:{
            type:'string',
            required:true
        },
        timestamp:{
            type:'number',
            required:true
        }
    },
    options:{
        timestamps:true
    }
})