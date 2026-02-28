import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import express from "express";
import { log } from "node:console";
const prisma = new PrismaClient();
const app = express();
app.use(express.json());
app.get('/user', async (req, res) => {
    //fetch all the user from user table
    const user = await prisma.user.findMany();
    res.json(user);
});
app.listen(3000, () => {
    console.log("Listening on port 3000");
});
/*
async function main() {
    await prisma.user.createMany({
        data:[{
            username:"sangram",
            email:"sangram@gmail.com",
            password:"123123",
            age:22
        },{
           username:"shouvik",
            email:"shouvik@gmail.com",
            password:"123098",
            age:21
        }]
    })
    console.log("Inserted successfully");
}
main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });


*/ 
//# sourceMappingURL=index.js.map