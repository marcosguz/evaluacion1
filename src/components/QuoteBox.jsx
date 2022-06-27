import quotes from '../quotes.json'
import { useState } from 'react'

const colors = [
    '#845EC2',
    '#D65DB1',
    '#FF6F91',
    '#FF9671',
    '#FFC75F',
    '#F9F871',
    '#2C73D2',
    '#0089BA',
    '#008E9B',
    '#008F7A'
]

const QuoteBox = () => {
    const random = Math.floor(Math.random() * quotes.length);
    const [nextQuotes, setNextQuotes] = useState(random);
    
    const quotesNext = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setNextQuotes(random);
    };

    const randomColorIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomColorIndex]

    document.body.style = `background: ${color}`

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
                <i className="fa-solid fa-angle-right arrow" style={{backgroundColor: color}}></i>
            </button>
        </div>
    )
}

export default QuoteBox