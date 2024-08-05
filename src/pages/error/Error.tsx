import React from "react";
import { MdError } from "react-icons/md";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error:any = useRouteError();
    console.log(error);

    return (
        <div className="error-page flex flex-col justify-center bg-black opacity-90 text-white h-screen align-middle">
            <h2 className="flex justify-center text-red-500 animate-bounce"><MdError /></h2>
            <h1 className="flex justify-center">Oops!</h1>
            <p className="flex justify-center">Sorry, an unexpected error occurred</p>
            <p className="flex flex-col justify-center">
                <i>{error?.statusText || error?.message}</i>
            </p>
        </div>
    )
}

export default ErrorPage;