import React from 'react';
import styled from 'styled-components';





function Footer() {

    const FooterDiv = styled.div
    `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #0a823c;
    min-height: 4rem;
    margin-top: 2rem;
    relative;
    width: 100%;
    max-width: 1200px;
    bottom: 0;
    
        span {
            color: white;
            font-size: .9rem;
            padding: 2rem;
        }
    
    
    `

    return (

    <FooterDiv>


        <span>© 2020 Lambda Build Week, Inc.  All images are owned by their respective copyright holders and used with permission.</span>
        

    </FooterDiv>

)
}
export default Footer