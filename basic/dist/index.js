import "dotenv/config";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
    await prisma.user.createMany({
        data: [{
                username: "sangram",
                email: "sangram@gmail.com",
                password: "123123",
                age: 22
            }, {
                username: "shouvik",
                email: "shouvik@gmail.com",
                password: "123098",
                age: 21
            }]
    });
    console.log("Inserted successfully");
}
main()
    .then(() => console.log("Inserted successfully"))
    .catch((e) => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map