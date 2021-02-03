import React from 'react'
import { AiFillGithub } from 'react-icons/ai'

function Footer() {
    return (
        <footer className="footer bg-green-800 text-white w-full mt-12">
            <div className="w-11/12 mx-auto md:w-10/12 2xl:w-8/12 flex flex-col item-center py-6 md:flex-row">
                <div className="flex-grow">
                    <p className="text-md font-medium mb-2">© 2020 Dahn Registrado</p>
                    <p className="text-xs"><a className="py-1 px-3 bg-white rounded-full italic underline text-blue-600 text-xs mr-2" href="https://dummyproducts-api.herokuapp.com/">dummyproducts-api</a>Credits to Kevin Roi Basina</p>
                </div>


                <div className="w-full mt-4 md:w-36 md:mt-0">
                    <a href="https://github.com/Dahnnyboi/dummy-products"><AiFillGithub size="1.2em" className="react-icons react-icons-inline"/>Github</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
