import React from 'react';
import { useSelector } from 'react-redux';

function Loading() {
    const { loading } = useSelector((store) => store.loading);
    
    return (
        <div className="flex items-center justify-center">
            {loading && (
                <button type="button" className="flex items-center justify-center text-indigo-400 font-bold my-60 py-2 px-4 rounded " disabled>
                    <svg className="animate-spin h-9 w-9 mr-3 text-indigo-400" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                    </svg>
                    Processing...
                </button>
            )}
        </div>
    );
}

export default Loading;


