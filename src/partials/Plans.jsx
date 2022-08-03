import React from 'react'

function Plans() {
  return (
    <div className="mb-10 mt-10 p-5">
        <div className="max-w-3xl mx-auto text-center pb-2 md:pb-7">
            <h2 className="h2 mb-4">The Offer</h2>
          </div>
        <div className="items-center justify-center p-5 flex flex-col">
            <div className="border-2 border-blue-600 rounded drop-shadow-sm p-10 text-center w-full mb-10">
                <div className="p-3">
                    <h1 className="block font-bold text-xl text-blue-600">Premium</h1>
                    <p className="font-bold text-blue-600">$2,699</p>
                    <p className="p-1">Guaranteed 700+ Score</p>
                    <p className="italic p-1">8 Weeks of Test Support</p>
                    <hr className="mb-2 mt-2"/>
                </div>
                    <ul role="list" class="list-disc pl-10 space-y-3">
                        <li></li>
                        <li className=""></li>
                        <li>We guarantee that you will score over a 700 (or increase your score by at least 100 points). <span className="text-blue-600">In any case, if you are not happy with your score, we don't get paid.</span></li>
                    </ul>
            </div>
        </div>
    </div>
  )
}

export default Plans