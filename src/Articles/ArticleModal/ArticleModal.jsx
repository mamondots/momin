import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { HiMiniXMark } from "react-icons/hi2";

const ArticleModal = ({ articles }) => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={openModal}
                    className=""
                >
                    View Abstract
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-3xl rounded transform overflow-hidden  bg-white px-6 py-8 text-left align-middle shadow-xl transition-all">

                                    <div>
                                        <h2 className="font-medium text-[15px] text-[#072159]">{articles.title}</h2>
                                        <p className='text-[15px]'>{articles.author}</p>
                                        <h2 className='font-medium py-4'>Abstract</h2>
                                        <p className='pb-4 text-[15px]'>{articles.abstract}</p>
                                    </div>

                                    <div className="top-0 right-0 absolute mx-2">
                                        <button
                                            className="px-2 py-2 bg-[#91000D] text-white"
                                            type="button"
                                            onClick={closeModal}
                                        >
                                            <HiMiniXMark />
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default ArticleModal;