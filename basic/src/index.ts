import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import express from "express" 
import { log } from "node:console";

const prisma = new PrismaClient();
const app=express();
app.use(express.json());


app.get('/user',async (req,res)=>{
    //fetch all the user from user table
    const user=await prisma.user.findMany();
    res.json(user);
})

// Route to get a user's todos based on their ID
app.get("/todos/:id", async (req, res) => {
    // Extract user ID from the URL parameter
    const id = req.params.id;
    // Find the user with the given ID and include their todos, username, and password
    const users = await prisma.user.findFirst({
        where: {
            id: parseInt(id) // Convert the ID from string to integer
        },
        select: {
            todos: true,  // Fetch the user's todos
            username: true, // Fetch the user's username
        }
    });
    // Send the user data as a JSON response
    res.json(users);
})

app.listen(3000,()=>{
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