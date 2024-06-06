import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SectionHeroDepartemen from "../components/sections/departemenPage/SectionHeroDepartemen";
import SectionTupoksiProkerDepartemen from "../components/sections/departemenPage/SectionTupoksiProkerDepartemen";
import SectionAnggotaDepartemen from "../components/sections/departemenPage/SectionAnggotaDepartemen";
import { departemenData } from "../data/departemenData.js";

const Departemen = () => {
    const { id } = useParams();
    const [dataDepartemen, setDataDepartemen] = useState(departemenData[0]);

    // console.log({ dataDepartemen });

    useEffect(() => {
        if (id === "kp") {
            setDataDepartemen(departemenData[0]);
        }

        if (id === "pit") {
            setDataDepartemen(departemenData[1]);
        }

        if (id === "advo") {
            setDataDepartemen(departemenData[2]);
        }

        if (id === "sosprof") {
            setDataDepartemen(departemenData[3]);
        }

        if (id === "medkom") {
            setDataDepartemen(departemenData[4]);
        }

        if (id === "kwu") {
            setDataDepartemen(departemenData[5]);
        }

        if (id === "psdm") {
            setDataDepartemen(departemenData[6]);
        }
    }, [id, dataDepartemen, setDataDepartemen]);

    return (
        <>
            <SectionHeroDepartemen dataHero={dataDepartemen} />
            <SectionTupoksiProkerDepartemen
                dataTupoksiProker={dataDepartemen}
            />
            <SectionAnggotaDepartemen dataAnggota={dataDepartemen} />
        </>
    );
};

export default Departemen;
