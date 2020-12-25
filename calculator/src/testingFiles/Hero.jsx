import React from 'react'
//rfce
// this is to make error message
// second part of error message is in ErrorBoundary blade
function Hero({heroName}) {
    if(heroName === 'Joker'){
        throw new Error ('Not a hero!')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}

export default Hero;
