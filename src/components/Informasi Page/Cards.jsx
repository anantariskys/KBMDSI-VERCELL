import React from "react";
import image from "../../assets/informasipage/static.png";
import Card from "./Card";

function Cards() {
    const contents = [
        {
            title: "Halo ini judul blablabla",
            image: image,
            main: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ratione nisi, corrupti, eos incidunt sed qui hic, animi architecto iusto tempore recusandae ducimus odio illum accusamus nulla asperiores quos",
            date: "5 Mei - 12 Mei 2024",
            departemen: "Kewirausahaan",
        },
        {
            title: "CAREER INFORMATION",
            image: image,
            main: "Careermation merupakan salah satu program kerja pada bidang kesejahteraan mahasiswa dimana program kerja ini bergerak dengan cara memberikan informasi terkait lowongan kerja yang dapat diikuti oleh mahasiswa Departemen Sistem InformasiI.",
            date: "5 Mei - 12 Mei 2024",
            departemen: "Kewirausahaan",
        },
        {
            title: "Halo ini judul blablabla",
            image: image,
            main: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ratione nisi, corrupti, eos incidunt sed qui hic, animi architecto iusto tempore recusandae ducimus odio illum accusamus nulla asperiores quos",
            date: "5 Mei - 12 Mei 2024",
            departemen: "Kewirausahaan",
        },
        {
            title: "Halo ini judul blablabla",
            image: image,
            main: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ratione nisi, corrupti, eos incidunt sed qui hic, animi architecto iusto tempore recusandae ducimus odio illum accusamus nulla asperiores quos",
            date: "5 Mei - 12 Mei 2024",
            departemen: "Kewirausahaan",
        },
        {
            title: "Halo ini judul blablabla",
            image: image,
            main: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat ratione nisi, corrupti, eos incidunt sed qui hic, animi architecto iusto tempore recusandae ducimus odio illum accusamus nulla asperiores quos",
            date: "5 Mei - 12 Mei 2024",
            departemen: "Kewirausahaan",
        },
        {
            title: "Halo ini judul blablabla",
            image: image,
            main: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. quos",
            date: "5 Mei - 12 Mei 2024",
            departemen: "Kewirausahaan",
        },
    ];

    return (
        <div className="relative grid lg:px-24 md:px-10 px-5 lg:grid-cols-3 grid-cols-2 lg:gap-12 lg:gap-y-12 gap-y-16 gap-6 z-20  ">
            {contents.map((content, index) => (
                <Card
                    key={index}
                    index={index}
                    image={content.image}
                    title={content.title}
                    content={content.main}
                    date={content.date}
                    departemen={content.departemen}
                    lastIndex={contents.length - 1}
                />
            ))}
        </div>
    );
}

export default Cards;
