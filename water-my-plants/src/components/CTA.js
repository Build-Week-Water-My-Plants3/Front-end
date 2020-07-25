import React from 'react';
import styled from 'styled-components'
import CTABG from './assets/cta.jpeg'





function CTA() {



    const CTADiv = styled.div 
    `
    display: flex;
    min-height: 26rem;
    background-image: url(${CTABG});
    background-size: 100vw;
    // background
    background-position: center;
    background-repeat: no-repeat;
    align-items: center;
    justify-content: center;

    `


    return (
        <CTADiv>

        </CTADiv>
    )
}

export default CTA