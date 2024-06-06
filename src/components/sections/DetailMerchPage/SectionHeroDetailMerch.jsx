import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import MerchDetailCard from "../../DetailMerch/MerchDetailCard.jsx";
import { merchData } from "../../../data/merchData.js";
import CircleBackground from "../../CircleBackground.jsx";

const SectionHeroDetailMerch = ({ merchId }) => {
    const [product, setProduct] = useState({});
    const [error, setError] = useState(null);

    useEffect(() => {
        const item = merchData.find((item) => item.id === parseInt(merchId));

        if (!item) {
            setError("Product not found");
            return;
        }

        setProduct(item);
    }, [merchId]);

    const { id } = useParams();
    const elemenRef = useRef(null);

    useEffect(() => {
        if (elemenRef.current) {
            const offset = 100; // Adjust this value according to your needs
            const elementPosition =
                elemenRef.current.getBoundingClientRect().top +
                window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    }, [id]);

    return (
        <section
            ref={elemenRef}
            id="hero"
            className="pt-10 mx-auto pb-16 overflow-hidden relative z-10"
        >
            <div className="mx-auto w-full lg:max-w-[80%] px-5 md:px-12 xl:p-0">
                <h1
                    className="font-glacial-indifference-bold text-center lg:text-left text-6xl lg:text-8xl bg-gradient-to-b from-[#A839C0] to-[#6F66D0] text-white bg-clip-text mb-12"
                    style={{
                        WebkitTextStroke: "10px transparent",
                        WebkitFilter:
                            "drop-shadow(5px 10px 4px rgba(0, 0, 0, 0.25))",
                        filter: "drop-shadow(5px 10px 4px rgba(0, 0, 0, 0.25))",
                    }}
                >
                    Detail Merch
                </h1>

                {error && (
                    <h1 className="text-red-500 font-glacial-indifference-bold">
                        {error}
                    </h1>
                )}

                {product && <MerchDetailCard data={product} />}
            </div>
        </section>
    );
};

export default SectionHeroDetailMerch;
