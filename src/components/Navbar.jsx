import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
const Navbar = () => {
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const handleMouseIn = () => {
        setIsActive(true);
    };
    const handleMouseOut = () => {
        setIsActive(false);
    };
    const handleNavbar = () => {
        setIsOpen(!isOpen);
        if (!isOpen) {
            setDropdown1(false);
            setDropdown2(false);
        }
    };
    const handleDropdown1 = () => {
        if (dropdown2 === true) {
            setDropdown2(false);
        }
        setDropdown1(!dropdown1);
    };
    const handleDropdown2 = () => {
        setDropdown2(!dropdown2);
    };

    return (
        <nav className="lg:h-[13vh] h-fit bg-Custom-Blue px-4 lg:px-24 md:px-10 flex justify-between items-center sticky top-0 z-50">
            <img
                src={Logo}
                alt="Logo"
                className="lg:h-full h-16 aspect-auto"
                draggable="false"
            />
            <ul
                className="h-full hidden lg:flex items-center gap-10 font-glacial-indifference-bold text-lg text-slate-50"
                to="/"
            >
                <Link
                    className="relative h-full px-1 group items-center flex"
                    to="/"
                >
                    Beranda
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link>
                <Link
                    className="relative h-full px-1 group items-center flex"
                    to="/informasi"
                >
                    Informasi
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link>
                <div className="relative h-full px-1 group items-center flex">
                    Profile{" "}
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                    <div className="group-hover:visible w-[375%] flex  flex-col  invisible left-full -translate-x-full absolute top-[100%] pt-2 bg-transparent z-10">
                        <Link
                            to="/tentang-kami"
                            className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue hover:duration-200 ease-in-out"
                        >
                            Tentang Kami
                        </Link>
                        <div
                            onMouseEnter={handleMouseIn}
                            onMouseLeave={handleMouseOut}
                            className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue group hover:duration-200 ease-in-out relative"
                        >
                            EMDSI
                            <div
                                className={`${
                                    isActive ? "visible" : "invisible"
                                }  left-[100%] top-0 z-10 pl-2  bg-transparent absolute w-[calc(110%)] flex flex-col`}
                            >
                                <Link
                                    to="/departemen/advo#hero"
                                    className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Advokesma
                                </Link>

                                <Link
                                    to="/departemen/sosprof#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Sosial Profesi
                                </Link>
                                <Link
                                    to="/departemen/kwu#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Kewirausahaan
                                </Link>
                                <Link
                                    to="/departemen/kp#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Keilmuan dan Pengajaran
                                </Link>
                                <Link
                                    to="/departemen/pit#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    PIT
                                </Link>
                                <Link
                                    to="/departemen/medkom#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Medkominfo
                                </Link>
                                <Link
                                    to="/departemen/psdm#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    PSDM
                                </Link>
                                <Link
                                    to="/profile-emdsi"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Semua
                                </Link>
                            </div>
                        </div>
                        <Link
                            to="/bpmdsi"
                            className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue hover:duration-200 ease-in-out"
                        >
                            BPMDSI
                        </Link>
                        <Link
                            to="/pengembanganinternal#hero"
                            className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue hover:duration-200 ease-in-out"
                        >
                            Pengembangan Internal
                        </Link>
                    </div>
                </div>
                <Link className="relative h-full px-1 group items-center flex">
                    Hubungi Kami{" "}
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link>
              
            </ul>
            <div
                onClick={() => handleNavbar()}
                className={` lg:hidden h-7 aspect-square relative`}
            >
                <div
                    className={`${
                        isOpen ? "z-10 opacity-0" : "z-40 opacity-100"
                    } duration-300 ease-in absolute w-full h-full flex   flex-col justify-evenly`}
                >
                    <div
                        className={`h-0.5 w-full rounded-xl bg-slate-50`}
                    ></div>
                    <div
                        className={`h-0.5 w-full rounded-xl bg-slate-50`}
                    ></div>
                    <div
                        className={`h-0.5 w-full rounded-xl bg-slate-50`}
                    ></div>
                </div>
                <div
                    className={`${
                        isOpen ? "z-40 opacity-100" : "z-10 opacity-0"
                    } duration-300 ease-in absolute w-full h-full flex   flex-col justify-evenly`}
                >
                    <div
                        className={`h-0.5 w-full absolute left-1/2 -translate-x-1/2 rotate-45 rounded-xl bg-slate-50`}
                    ></div>
                    <div
                        className={`h-0.5 w-full absolute left-1/2 -translate-x-1/2 -rotate-45 rounded-xl bg-slate-50`}
                    ></div>
                </div>
            </div>

            <div
                className={`${
                    isOpen ? "flex" : "hidden"
                } absolute w-1/2 text-ase px-2 py-5 text-slate-50 font-bold  gap-5 flex-col h-screen bottom-0 right-0 translate-y-full  bg-Custom-Blue`}
            >
                <Link className="relative px-5 py-2 lg:py-0 group flex" to="/">
                    Beranda
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link>
                <Link
                    className="relative px-5 py-2 lg:py-0 group flex"
                    to="/informasi"
                >
                    Informasi
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link>
                <div className="relative group px-5 py-2 lg:py-0 flex">
                    <p onClick={() => handleDropdown1()}>Profile </p>
                    <div
                        className={`absolute  ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0  ${
                            dropdown1 ? "w-full left-0 origin-left" : ""
                        }group-hover:origin-left right-0 origin-right`}
                    ></div>
                    <div
                        className={`${
                            dropdown1 ? "visible" : "invisible"
                        }  w-fit lg:w-[375%] text-xs flex  flex-col   -left-3 lg:left-3/4 -translate-x-full lg:-translate-x-3/4 absolute top-0 lg:top-[100%] pt-2 bg-transparent z-10`}
                    >
                        <Link
                            to="/tentang-kami"
                            className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue hover:duration-200 ease-in-out"
                        >
                            Tentang Kami
                        </Link>
                        <div
                            className={`${
                                dropdown2 ? "bg-Custom-Orange-2" : ""
                            } p-2 hover:bg-Custom-Orange-2  bg-Custom-Blue group hover:duration-200 ease-in-out `}
                        >
                            <p onClick={() => handleDropdown2()}>EMDSI</p>
                            <div
                                className={`${
                                    dropdown2 ? "visible" : "invisible"
                                }  right-0 -bottom-4 translate-y-full z-10   bg-transparent absolute w-fit flex flex-col`}
                            >
                                <Link
                                    to="/departemen/advo#hero"
                                    className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Advokesma
                                </Link>

                                <Link
                                    to="/departemen/sosprof#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Sosial Profesi
                                </Link>
                                <Link
                                    to="/departemen/kwu#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Kewirausahaan
                                </Link>
                                <Link
                                    to="/departemen/kp#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Keilmuan dan Pengajaran
                                </Link>
                                <Link
                                    to="/departemen/pit#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    PIT
                                </Link>
                                <Link
                                    to="/departemen/medkom#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Medkominfo
                                </Link>
                                <Link
                                    to="/departemen/psdm#hero"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    PSDM
                                </Link>
                                <Link
                                    to="/profile-emdsi"
                                    className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue duration-200 ease-in-out"
                                >
                                    Semua
                                </Link>
                            </div>
                        </div>
                        <div className="p-2 hover:bg-Custom-Orange-2 bg-Custom-Blue hover:duration-200 ease-in-out">
                            BPMDSI
                        </div>
                        <Link
                            to="/pengembanganinternal#hero"
                            className="p-2  hover:bg-Custom-Orange-2 bg-Custom-Blue hover:duration-200 ease-in-out"
                        >
                            Pengembangan Internal
                        </Link>
                    </div>
                </div>
                {/* <Link className="relative px-5 py-2 lg:py-0 group flex">
                    Hubungi Kami{" "}
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link>
                <Link
                    to="/login"
                    className="relative px-5 py-2 lg:py-0 group flex"
                >
                    Login{" "}
                    <div className="absolute ease-in-out  group-hover:w-full duration-300 rounded-xl bottom-0 h-1 w-0 bg-Custom-Orange-2 group-hover:left-0 group-hover:origin-left right-0 origin-right"></div>
                </Link> */}
            </div>
        </nav>
    );
};

export default Navbar;
