const express=require("express");
const cookieParser=require('cookie-parser')
const authRoutes=require("./routes/auth.routes")
const chatRoutes=require('./routes/chat.routes')
const cors =require('cors')
/* Using middleware */
const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}));

/* Using Routes */
app.use('/api/auth',authRoutes)
app.use('/api/chat',chatRoutes)

app.get('/',(req,res)=>{
    res.sendFile(this.path.join(__dirname,'../public/index.html'));
})  

module.exports=app;