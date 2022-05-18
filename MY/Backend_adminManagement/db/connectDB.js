const mongoose = require('mongoose')
mongoose.connect(process.env.dbURI,{
    useNewUrlParser:true,useUnifiedTopology:true
})
.then(() => console.log(`coonected successfully`))
.catch(() => console.log(`Connection fail`))