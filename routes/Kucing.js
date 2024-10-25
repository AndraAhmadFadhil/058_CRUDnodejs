import express, { Router } from "express";
const router = express.Router();
const kucing = [
    {
        Spesies: "Kucing Persia",
        WarnaBulu: "Putih",
        Usia: "3 tahun",
        BeratBadan: "4,5 kg",
    },
    {
        Spesies: "Kucing Siam",
        WarnaBulu: "Coklat dan Krem",
        Usia: "2 tahun",
        BeratBadan: "3 kg",
    },
    {
        Spesies: "Kucing Maine Coon",
        WarnaBulu: "Hitam",
        Usia: "4 tahun",
        BeratBadan: "6 kg",
    },
    {
        Spesies: "Kucing British Shorthair",
        WarnaBulu: "Abu=abu",
        Usia: "1 tahun",
        BeratBadan: "3,2 kg",
    }
];

router.get("/", (req, res) => {
    res.send(kucing);
});
export default router;