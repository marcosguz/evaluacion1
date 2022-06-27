import quotes from '../quotes.json'
import { useState } from 'react'

const QuoteBox = ({color}) => {
    const random = Math.floor(Math.random() * quotes.length);
    const [nextQuotes, setNextQuotes] = useState(random);
    
    const quotesNext = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setNextQuotes(random);
    };


    return (
        <div style={{color: color}}>
            <h4>
                <i className="fa-solid fa-quote-left commaDouble"></i>
                {quotes[nextQuotes].quote}
            </h4>
            <p>
                {quotes[nextQuotes].author}
            </p>
            <button onClick={quotesNext} style={{backgroundColor: color}}>
                <i className="fa-solid fa-angle-right arrow"></i>
            </button>
        </div>
    )
}

export default QuoteBox