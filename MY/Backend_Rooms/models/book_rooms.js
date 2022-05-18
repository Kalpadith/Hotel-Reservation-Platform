const mongoose =require ('mongoose')
const Schema = mongoose.Schema;

const bookroomsSchema = new Schema({
    from_date:{
        type:Date,
        trim: true,
        required: false
    },
    to_date:{
        type:Date,
        required:true,
        trim:true
    },
    full_name:{
        type:String,
        required:true,
        trim:true
    },
    phone_number:{
        type:Number,
        required:true,
        trim:true
    },
    nic:{
        type:Number,
        required:true,
        trim:true
    },
    address:{
        type: String,
        required: true,
        trim:true
    },

    email:{
        type: String,
        required: true,
        trim:true
    }
},{timestamps:true})

// var roomSchema = mongoose.model('roomSchema', roomSchemaSchema);

// export default roomSchema;

const book_rooms = mongoose.model('book_rooms',bookroomsSchema)

module.exports = book_rooms