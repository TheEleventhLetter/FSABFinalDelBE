import express from "express";
import cors from "cors";
import dotevn from "dotenv";
dotevn.config();
import { db } from "./util/FirebaseInit.js";
import { collection, getDocs, addDoc } from "firebase/firestore";

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
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    });
    res.send(docs);
});


app.get("/locationsVisitedComments", async(req, res) => {
    const collectionRef = collection(db, "VisitedComments");
    const collectionSnap = await getDocs(collectionRef);
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    });
    res.send(docs);
})

app.post("/locationsVisitedComments", async(req, res) => {
    const commentRef = collection(db, "VisitedComments");
    const commentBody = req.body;
    try {
        console.log(commentBody);
        await addDoc(commentRef, commentBody);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
    res.status(200).send("Succesfully Added Comment");
});

app.get("/locationsToVisit", async(req, res) => {
    const collectionRef = collection(db, "ToVisit");
    const collectionSnap = await getDocs(collectionRef);
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    });
    res.send(docs);
});

app.get("/locationsToVisitComments", async(req, res) => {
    const collectionRef = collection(db, "ToVisitComments");
    const collectionSnap = await getDocs(collectionRef);
    const docs = []
    collectionSnap.forEach((doc) => {
        docs.push(doc.data())
    });
    res.send(docs);
});

app.post("/locationsToVisitComments", async(req, res) => {
    const commentRef = collection(db, "ToVisitComments");
    const commentBody = req.body;
    try {
        await addDoc(commentRef, commentBody);
    } catch (e) {
        console.error(e);
        res.status(500);
    }
    res.status(200).send("Succesfully Added Comment")
});

function start() {
    app.listen(port, () => {
        console.log("Listening on port", port);
    });
}

start();