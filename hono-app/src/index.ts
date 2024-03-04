import { Hono } from 'hono'

const app = new Hono()

async function authmiddleware(c:any,next:any){
  if(c.req.header("Authorization")){
    await next();
  }else{
    return c.text("you have no access");
  }
}
app.use(authmiddleware);
app.post('/', async(c) => {
  const body=await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("parameters"));
  return c.text('Hi There ..')

})

// app.post('/user', (c) => {
//   return c.text('Hello Hono!')
// })

export default app
