const express = require ('express');

const app = express();

app.use((req,res,next) => {
 console.log("first  dummy middleware",req.path,req.method);
 next();
});

app.use((req, res, next)=>{
  console.log("second dummy middleware", req.path,req.method);
  next();
});
// app.use((req,res,next)=>{
//   console.log("third dummy middleware", req.path,req.method);
//   res.send("<h1>Welcome to complete node js course</h1>");  
// });
app.get( "/",(req,res,next)=>{
  console.log("Handling /contact-us for GET", req.path,req.method);
res.send(`<h1>Welcome to complete node js course</h1>`);
});
app.get( "/contact-us",(req,res,next)=>{
  console.log("Handling / for GET", req.path,req.method);
res.send(
  `<h1>Please give your details here</h1>
   <form action="/contact-us" method="post">
   <input type="text" name="name" placeholder="Enter Your Name"/>
   <input type="email" name ="email" placeholder="Enter Your Email"/>
   <input type="submit"/>
   </form>
  
  `);
});
app.post("/contact-us",(req,res,next) =>{
  console.log("Handling /contact-us for POST",req.path,req.method);
  res.send("<h1>Thank you for your submission</h1> ");
});



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on  address http://localhost:${PORT}`);
});