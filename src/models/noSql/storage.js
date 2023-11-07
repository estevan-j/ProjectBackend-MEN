const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String,
        },
        filename: {
            type: String,
            required: [true, 'A filename is necessary to load.']
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

StorageSchema.plugin(mongooseDelete, {overrideMethods: 'all'})

module.exports = mongoose.model('Storage', StorageSchema)