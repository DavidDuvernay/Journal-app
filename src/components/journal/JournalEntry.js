import React from 'react';

export const JournalEntry = () => {
    return (
        <div className= 'journal__entry pointer'>
            <div 
                className= 'journal__entry-picture'
                style= {{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.ctfassets.net/hrltx12pl8hq/1fR5Y7KaK9puRmCDaIof7j/09e2b2b9eaf42d450aba695056793607/vector1.jpg)'
                }}
            >
            </div>

            <div className= 'journal__entry-body'>
                <p className= 'journal__entry-tittle'>
                    A new day
                </p>

                <p className= 'journal__entry-content'>
                    Lorem Ipsum copy in various charsets and languages for layouts.
                </p>
            </div>

            <div className= 'journal__entry-date-box'>
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}