import { RedisClientOptions, createClient } from "redis";

const options: RedisClientOptions = {
    socket: {
        host: 'localhost',
        port: 6379
    }
}

const client = createClient(options);

client.on('error', (err) => {
    console.log(`Redis Client Error: ${err}`);
})

await client.connect