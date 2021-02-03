import React from 'react'
import Shell from '../components/global/Shell'
import {
    AiFillTwitterSquare,
    AiFillGithub, 
    AiFillYoutube
} from 'react-icons/ai'
import { Link }from 'react-router-dom'

function Bought() {
    return (
        <div>
            <Shell>
                <div className="w-full mt-4 text-center">
                    <h1 className="text-4xl">Item Bought</h1>
                    <p className="text-md mb-4">Thanks for trying the prototype of Dummy products!</p>
                    <Link to="/products" className="bg-green-300 text-green-800 font-medium py-2 px-4 rounded">Buy more</Link>

                    <p className="mt-8">Interested at my contents? Follow me and subscribe</p>
                    <div className="flex flex-row mx-auto justify-center">
                        <a id="twitter" href="https://twitter.com/DahnRegistrado"><AiFillTwitterSquare color="#00acee" size="3em"/></a>
                        <a id="github" href="https://github.com/Dahnnyboi"><AiFillGithub color="#211F1F" size="3em"/></a>
                        <a id="youtube" href="https://www.youtube.com/channel/UC80QdQaMcxVcELI3nYsmZjA"><AiFillYoutube color="#c4302b" size="3em"/></a>
                    </div>
                </div>
            </Shell>
        </div>
    )
}

export default Bought
