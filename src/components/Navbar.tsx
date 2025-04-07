import { Menu, Popover } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { AiOutlineBell } from 'react-icons/ai';


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
                        <div className="mx-auto w-full mb-4 pb-1 sm:px-6 lg:px-8 shadow-md ml-1 z-50">
                            <div className="relative flex ">
                                <div className="ml-auto flex">
                                    <Menu as="div" className="relative ml-5 flex-shrink-0 z-50">
                                        <div className='flex items-center justify-center'>
                                            <div className="flex flex-col items-center justify-center">

                                                <UserCircleIcon
                                                    className="h-8 w-8 rounded-full"
                                                    aria-hidden="true"
                                                />

                                                <span className='text-[11px]'>Audray</span>
                                            </div>

                                            <div className="relative ml-2 -mt-3 cursor-pointer">
                                                <AiOutlineBell style={{ color: 'gray', fontSize: '21px' }} />
                                                <span className="absolute -top-1 -right-1 bg-red-500 rounded-full text-[10px] text-white px-1">3</span>
                                            </div>
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
