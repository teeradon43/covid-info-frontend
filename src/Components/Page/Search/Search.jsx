import React, {useState} from "react";

const Search = () => {
    const [query, setQuery] = useState('');
    
    const handleOnChange = event => {
        setQuery(event.target.value);
        console.log(query);
    }

    const handleSearch = () => {
        alert("Searching '"+query+"' but nothing found.");
    }

    return(
        <div className="flex flex-col items-center justify-center bg-gray-200 drop-shadow-lg h-screen">
            <div className="flex flex-col items-center justify-center w-full mx-5 lg:w-1/3 lg:mx-0">
                <p className="font-bold text-blue-900 text-5xl ">COVID-19 Info</p>
                <input className="w-full mt-12 mb-6 p-5 text-xl rounded-full" type="text" id="search" placeholder="ระบุสิ่งที่ต้องการค้นหา" onChange={handleOnChange} autoFocus />
                <button className="bg-blue-800 hover:bg-blue-600 text-white font-bold text-l lg:text-2xl py-2 px-10 rounded-full" onClick={handleSearch} >ค้นหา</button>
            </div>
        </div>
    );
}

export default Search;