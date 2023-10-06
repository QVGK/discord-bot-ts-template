import { config } from "dotenv"
import { SapphireClient } from "@sapphire/framework";
import { ActivityType, GatewayIntentBits } from "discord.js";

config()

export default class extends SapphireClient {
    constructor() {
        super({
            intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
            presence: {
                activities: [{
                    type: ActivityType.Playing,
                    name: "Discord Bot TS Template"
                }]
            }
        })
    }

    async start() {
        this.login(process.env.TOKEN)
    }
}