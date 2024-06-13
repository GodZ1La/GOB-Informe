"use client"

import React, { useState } from "react";
interface SearchProps {
    id: string;
    placeholder: string;
    label: string;
    options: string[];
}

const SearchComponent: React.FC<SearchProps> = (props) => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [datalistId] = useState<string>(`datalist-${Math.random().toString(36).substring(7)}`);

    let { placeholder, label, id, options } = props;
    options = options === undefined ? [] : options;
    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div className="relative">
            <label htmlFor={id} className="block text-xs font-medium text-gray-700"> {label}</label>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value) }
                className="w-full rounded-md border-gray-200 py-2.5 pe-10 shadow-sm sm:text-sm"
                list={datalistId}                
            />        
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button type="button" className="text-gray-600 hover:text-gray-700">
                    <span className="sr-only">Search</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
            <datalist id={datalistId}>
            {options.map((option, index) => (
            <option key={index} value={option} />
            ))}
        </datalist>
        </div>
        
    );
}



export default SearchComponent;
