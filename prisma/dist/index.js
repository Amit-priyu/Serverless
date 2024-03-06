"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// create an insert function
function insertUser(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = prisma.user.create({
            data: {
                email: username,
                password,
                firstname,
                lastname
            },
            select: {
                id: true,
                password: true,
            },
        });
        console.log(res);
    });
}
insertUser("amit12345@gmail.com", "password", "Amit", "Priyadarshini");
function updateUser(username, { firstname, lastname }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstname,
                lastname
            }
        });
        console.log(res);
    });
}
updateUser("admin1", {
    firstname: "new name",
    lastname: "singh"
});
updateUser("hellp@gmail.com", {
    firstname: "Amitpriyu",
    lastname: "lastname"
});
