import React from "react";
import { Button } from "./Button";

export function Modal({ isOpen, onClose, title, children }) {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                {/* Background overlay */}
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                ></div>

                {/* Modal content */}
                <div
                    className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-headline"
                >
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            {/* Modal Title */}
                            <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                {title}
                            </h3>

                            {/* Modal Close Button */}
                            <Button
                                className="ml-auto"
                                handleClick={onClose}
                                type="button"
                                autoFocus={true}
                            >
                                Close
                            </Button>
                        </div>

                        {/* Modal Content */}
                        <div className="mt-2">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
