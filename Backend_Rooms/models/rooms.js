const mongoose =require ('mongoose')
const Schema = mongoose.Schema;

const roomsSchema = new Schema({

    room_id:{
        type:Number,
        required:true,
        trim:true
    },
    room_name:{
        type:String,
        required:true,
        trim:true
    },
    room_type:{
        type:String,
        required:true,
        trim:true
    },
    guests:{
        type:Number,
        required:true,
        trim:true
    },
    price:{
        type: Number,
        required: true,
        trim:true
    },

    size:{
        type: Number,
        required: true,
        trim:true
    }
},{timestamps:true})

// var roomSchema = mongoose.model('roomSchema', roomSchemaSchema);

// export default roomSchema;

const rooms = mongoose.model('rooms',roomsSchema)

module.exports = rooms