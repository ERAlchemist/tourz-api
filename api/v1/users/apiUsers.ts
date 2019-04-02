import { Router } from "express";
import { apiGetUserDetail } from "./apiGetUserDetail";
import { apiAddUser } from "./apiAddUser";
import { apiDeleteUser } from "./apiDeleteUser";
import { apiUpdateUser } from "./apiUpdateUser";

export let userRouter = Router();

userRouter.get("/:id", apiGetUserDetail);

userRouter.post("/", apiAddUser);

userRouter.delete("/:id", apiDeleteUser);

userRouter.patch("/:id", apiUpdateUser);