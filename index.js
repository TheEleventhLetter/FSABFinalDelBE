import express from "express";
import cors from "cors";
import dotevn from "dotevn";
dotevn.config();
import { db } from "./util/FirebaseInit";
import { collection, getDocts, addDoc } from "firebase/firestore";

const app = express();
const port = 8080;

app.use(express.json())
app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/", async(req, res) => {
    res.send("Hello World");
});

app.get("/locationsVisited", async(req, res) => {
    const collectionRef = collection(db, "Visited");
    const collectionSnap = await getDocs(collectionRef);
    const docs = []
    collectionSnap.foreEach((doc) => {
        docs.push(doc.data())
    });
    res.send(docs);
});

app.post("/locationsVisited", async(req, res) => {
    const locationRef = collection(db, "Visited");
    const locationBody = req.body;
    try {
        await addDoc(locationRef, locationBody);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
    res.status(200).send("Succesfully Added Location")
});

app.get("/locationsToVisit", async(req, res) => {
    const collectionRef = collection(db, "ToVisit");
    const collectionSnap = await getDocs(collectionRef);
    const docs = []
    collectionSnap.foreEach((doc) => {
        docs.push(doc.data())
    });
    res.send(docs);
});

app.post("/locationsToVisit", async(req, res) => {
    const locationRef = collection(db, "ToVisit");
    const locationBody = req.body;
    try {
        await addDoc(locationRef, locationBody);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
    res.status(200).send("Succesfully Added Location")
});

app.listen(port, () => {
    console.log("Listening on port", port);
});