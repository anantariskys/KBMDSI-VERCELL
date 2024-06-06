import React, { useEffect, useRef, useState } from "react";
import SectionHeroKomisi from "../components/sections/komisiPage/SectionHeroKomisi.jsx";
import SectionTupoksiProkerKomisi from "../components/sections/komisiPage/SectionTupoksiProkerKomisi";
import SectionAnggotaKomisi from "../components/sections/komisiPage/SectionAnggotaKomisi";
import { useParams } from "react-router-dom";
import { komisiData } from "../data/komisiData.js";

const Komisi = () => {
    const { id } = useParams();
    const [dataKomisi, setDataKomisi] = useState(komisiData[0]);

    useEffect(() => {
        if (id === "1") {
            setDataKomisi(komisiData[0]);
        }

        if (id === "2") {
            setDataKomisi(komisiData[1]);
        }

        if (id === "3") {
            setDataKomisi(komisiData[2]);
        }
    }, [id, dataKomisi, setDataKomisi]);

    // console.log({ dataKomisi });
    //   console.log(dataKomisi.length);

    //   if (!dataKomisi.length) return <p>Tidak ada data</p>;

    return (
        <>
            <SectionHeroKomisi dataHero={dataKomisi} />
            <SectionTupoksiProkerKomisi dataTupoksiProker={dataKomisi} />
            <SectionAnggotaKomisi dataAnggota={dataKomisi} />
        </>
    );
};

export default Komisi;
