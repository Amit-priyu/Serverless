import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

// create an insert function
async function insertUser(username: string, password: string, firstname: string, lastname: string) {
  const res=prisma.user.create({
    data:{
        email:username,
        password,
        firstname,
        lastname
    },
    select:{
        id:true,
        password:true,
    },
  })
  console.log(res);
}
insertUser("amit12345@gmail.com","password","Amit","Priyadarshini")
interface UpdateParams {
    firstname: string;
    lastname: string;
}

async function updateUser(username: string, {
    firstname,
    lastname
}: UpdateParams) {
  const res = await prisma.user.update({
    where: { email:username },
    data: {
      firstname,
      lastname
    }
  });
  console.log(res);
}

updateUser("admin1", {
    firstname: "new name",
    lastname: "singh"
})
updateUser("hellp@gmail.com",{
    firstname:"Amitpriyu",
    lastname: "lastname"
});