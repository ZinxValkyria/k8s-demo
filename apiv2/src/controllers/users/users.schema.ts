import { Schema } from "mongoose";
import { findOneOrCreate } from "./users.statics";
import { setDisplayName } from "./users.methods";

const UserSchema = new Schema({
    displayName: String,
    joined: {
        type: Date,
        default: new Date()
    },
    avatar: URL,
    username: String,
});


UserSchema.statics.findOneOrCreate = findOneOrCreate;
UserSchema.methods.setDisplayName = setDisplayName;


export default UserSchema;
