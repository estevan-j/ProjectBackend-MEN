const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const UserSchema = new mongoose.Schema(
    { // Data -users
        name: {
            type: String,
            required: [true, 'Please provide the name']
        },
        age: {
            type: Number
        },
        email: {
            type: String,
            unique: true,
            required: [true, 'Please, provide an email.'],
            select: false,
        },
        password: {
            type: String,
            required: [true, 'Please, provide a password']
        },
        role : {
            type: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true, // Todo createdAt, UpdatedAt,
        versionKey: false
    }
)


UserSchema.plugin(mongooseDelete, {overrideMethods: 'all'})

                 // Creating a model based on UserSchema
module.exports = mongoose.model('User', UserSchema)