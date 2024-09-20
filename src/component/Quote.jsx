import React, { useState } from 'react';

const Quote = () => {
    const quotes = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The best time to plant a tree was twenty years ago. The second best time is now. - Chinese Proverb",
        "You miss 100% of the shots you don’t take. - Wayne Gretzky",
        "Success is not the key to happiness. Happiness is the key to success. - Albert Schweitzer",
        "Believe you can and you're halfway there. - Theodore Roosevelt",
        "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
        "In the middle of every difficulty lies opportunity. - Albert Einstein",
        "What we think, we become. - Buddha",
        "Act as if what you do makes a difference. It does. - William James"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const [quote, setQuote] = useState(quotes[randomIndex]);

    return (
        <div className="text-center mt-4">
            <div className="mb-4">{quote}</div>
            <button 
                className="border bg-red-500 text-white px-4 py-2" 
                onClick={() => {
                    const newRandomIndex = Math.floor(Math.random() * quotes.length);
                    setQuote(quotes[newRandomIndex]);
                }}
            >
                Click here to generate quote
            </button>  
        </div>
    );
};

export default Quote;
