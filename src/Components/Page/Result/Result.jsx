import React from "react";

const Result = () => {
    const copyToClipboard = (url) =>{
        navigator.clipboard.writeText(url);
        alert("Copied to clipboard!");
    }

    const data = [
        {
            "title":"Corona Virus Disease (COVID-19)",
            "description":"The confirmed case of Thai who returned from aboard in quarantine places. Total. 6,945. New case. 10. Deaths. 4. Patient Under Investigation (PUI). Total ...",
            "link":"https://ddc.morph.go.th/eng/index.php"
        },
        {
            "title":"โรคติดเชื้อไวรัสโคโรนาสายพันธุ์ใหม่ 2019 - กรมควบคุมโรค",
            "description":"Call Center 1422 | สำหรับเจ้าหน้าที่. โรคติดเชื้อไวรัสโคโรนา 2019 (COVID-19).",
            "link":"https://ddc.moph.go.th/viralpneumonia/"
        },
        {
            "title":"COVID-19 situation in Thailand - WHO | World Health ...",
            "description":"On this website you can find information and guidance from WHO Thailand regarding the outbreak of novel coronavirus (COVID-19) that was first reported from ...",
            "link":"https://www.who.int/thailand/emergencies/novel-coronavirus-2019"
        },
        {
            "title":"WHO Coronavirus (COVID-19) Dashboard",
            "description":"World Health Organization Coronavirus disease situation dashboard presents official daily counts of COVID-19 cases and deaths worldwide, ...",
            "link":"https://covid19.who.int/"
        },
        {
            "title":"ศูนย์ข้อมูล COVID-19 - Home | Facebook",
            "description":"A - ATK (Antigen Test Kit) (พร้อมตรวจเสมอ เมื่อใกล้ชิดผู้ติดเชื้อ). ที่มา กระทรวงสาธารณสุข. #ศูนย์บริหารสถานการณ์โควิด19 · #ศูนย์ข้อมูลCOVID19",
            "link":"https://www.facebook.com/informationcovid19/"
        }
    ]

    return(
        <div className="bg-gray-200 leading-normal tracking-normal h-screen w-full">
            {/* Navbar */}
            <nav id="header" className="fixed w-full">
            <div className="relative w-full z-10 top-0 bg-gray-300 border-b border-grey-light">
                <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
                    <div class="pl-4 flex items-center">
                        <a className="text-teal-700 text-xl no-underline hover:no-underline font-extrabold" href="/">Covid-19 Info</a>
                    </div>
                </div>
            </div>
            </nav>
            {/* Search Result */}
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-blue-900 text-5xl mt-20 mb-10">Result</p>
                {data.map((post)=>{
                    return (
                        <div id="data-container" className="mb-5 w-3/5">
                            <div className="text-blue-600 text-md inline-flex">
                                {post.link}
                                <button onClick={()=> copyToClipboard(post.link)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </button>
                            </div>
                            <div className="text-blue-600 text-xl font-bold hover:underline" >
                                <a href={post.link}  target="_blank" rel="noreferrer">{post.title}</a>
                            </div>
                            <div className="text-black text-md truncate">{post.description}</div>
                        </div>
                        )
                })}
            </div>
        </div>
    );
}

export default Result;