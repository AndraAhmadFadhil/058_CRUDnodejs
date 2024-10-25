import express, { Router } from "express";
const router = express.Router();
const country = [
    {
        negara: "Indonesia",
        ibukota: "Jakarta",
        populasi: "273 juta",
        luas: "1.904.569 km²",
    },
    {
        negara: "Jepang",
        ibukota: "Tokyo",
        populasi: "125 juta",
        luas: "377.975 km²",
    },
    {
        negara: "Jerman",
        ibukota: "Berlin",
        populasi: "83 juta",
        luas: "357.022 km²",
    },
    {
        negara: "Mesir",
        ibukota: "Kairo",
        populasi: "104 juta",
        luas: "1.001.450 km²",
    }
];

router.get("/", (req, res) => {
    res.send(country);
});
export default router;