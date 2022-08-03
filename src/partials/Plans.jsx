import React from 'react'

function Plans() {
  return (
    <div className="mb-10 mt-10 p-5">
        <div className="max-w-3xl mx-auto text-center pb-2 md:pb-7">
            <h2 className="h2 mb-4">Plan Options</h2>
          </div>
        <div className="items-center justify-center p-5 flex flex-col">
            <div className="border-2 border-blue-600 rounded drop-shadow-sm p-10 text-center w-full mb-10">
                <div className="p-3">
                    <h1 className="block font-bold text-xl text-blue-600">Basic</h1>
                    <p className="font-bold text-blue-600"><span className="line-through text-gray-500">$149</span> Free</p>
                    <p className="italic p-1">One 30-minute Consultation</p>
                    <hr className="mb-2 mt-2"/>
                </div>
                    <ul role="list" class="list-disc pl-10 space-y-3">
                        <li>Comprensive resume review and optimization for the recruiting process</li>
                        <li className="">Preliminary identification of key areas of interest and application strategy</li>
                    </ul>
            </div>
            <div className="border-2 border-gray-300 rounded drop-shadow-sm p-10 text-center w-full mr-10 ml-10">
                <div className="p-3">
                    <h1 className="block font-bold text-xl text-blue-600">Premium</h1> 
                    <p className="font-bold text-gray-500">$799</p>
                    <p className="italic p-1">8 Weeks of Application Support</p>
                    <hr className="mb-2 mt-2"/>
                </div>
                    <ul role="list" class="list-disc pl-10 space-y-3">
                        <li className="">Personalized plan to find and land your perfect job opportunity in under 8 weeks</li>
                        <li>Access to a personal consultant and all Bellinger & Co services including resume reviews, networking stategy, applications, etc.</li>
                        <li><span className= "font-bold text-gray-600">We guarantee that we can get you your dream job in under 2 months.</span> Otherwise, we either work for free until you are satisfied, or return all of your money.</li>
                        <li className="">Premium option <span className= "font-bold text-gray-600"> requires student application and approval.</span> Please schedule a consultation or reach out to charles@bellingerandco.com to learn more.</li>
                    </ul>
                </div>
        </div>
    </div>
  )
}

export default Plans