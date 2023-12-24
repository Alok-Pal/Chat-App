import express from "express";
import serverRoute from "./server";


const router = express();

router.use('/try', serverRoute)

export default router;