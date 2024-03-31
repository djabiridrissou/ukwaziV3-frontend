import { Menu, Popover } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { AiOutlineMessage, AiOutlineBell } from 'react-icons/ai';


function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    useEffect(() => {

    }, []);

    return (
        <>
            <Popover
                as="header"
                className={({ open }: any) =>
                    classNames(
                        open ? "fixed inset-0 z-50 overflow-y-auto" : "",
                        "bg-white shadow-sm lg:static lg:overflow-y-visible"
                    )
                }
            >
                {(
                    <>
                        <div className="mx-auto w-full py-3 mb-3 px-6 sm:px-6 lg:px-8 shadow-md ml-1 z-50">
                            <div className="relative flex ">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search for..."
                                        className="py-2 pl-2 pr-[200px] border bg-slate-100 border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 w-full"
                                    />
                                    <div className="absolute top-0 right-0 h-full flex items-center">
                                        <button className="bg-blue-500 py-3 px-3 rounded-r-md">
                                            <FaSearch className="h-5 w-5 text-white" />
                                        </button>
                                    </div>
                                </div>

                                <div className="ml-auto flex">
                                    <div className="flex items-center -mt-2 mr-6">
                                        <div className="relative">
                                        <AiOutlineBell style={{ color: 'gray', fontSize: '21px' }} />
                                            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-[10px] text-white px-1">3+</span> {/* Indicateur pour les messages */}
                                        </div>

                                        <div className="relative ml-8">
                                        <AiOutlineMessage style={{ color: 'gray', fontSize: '21px' }} />
                                          
                                            <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-[10px] text-white px-1">7</span> {/* Indicateur pour les notifications */}
                                        </div>
                                        <span className="h-10 w-[1px] bg-gray-300 ml-8"></span>
                                    </div>

                                    <Menu as="div" className="relative ml-5 flex-shrink-0 z-50">
                                        <div className='flex  items-center'>
                                            <span className='text-[11px] mr-2'>Valerie Luna</span>
                                            <Menu.Button className="relative flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                <span className="absolute -inset-1.5" />
                                                <UserCircleIcon
                                                    className="h-8 w-8 rounded-full"
                                                    aria-hidden="true"
                                                />
                                            </Menu.Button>
                                        </div>
                                    </Menu>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </Popover>
        </>
    );
};

export default Navbar;
