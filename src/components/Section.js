import React from 'react'
import Styled from "styled-components"
import Fade from 'react-reveal/Fade';


function Section(props) {
    console.log(props);
    return (
        <Wrap bgImage={props.backgroundImage} bgRuta={props.ruta}>
            <Fade bottom>            
               <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>       
                </ItemText>
            </Fade>
            <Buttons>
                <Fade bottom>
                <ButtonGroup>
                        <LeftButton>
                        {props.LButtonText}
                        </LeftButton>
                        {props.RButtonText && // <= ESO ES UN IF, SI EXISTE LA PROPIEDAD ENTRA 
                            <RigthButton>
                            {props.RButtonText}
                            </RigthButton>
                        }

                    </ButtonGroup>
                </Fade>
                <DownArrow src='./images/down-arrow.svg'/>
            </Buttons>
        </Wrap> 
        
    )
}

export default Section

const Wrap = Styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image:${props =>`url("${props.bgRuta}/images/${props.bgImage}")`};
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`

const ItemText = Styled.div`
padding-top:15vh;
text-align:center;
`

const ButtonGroup = Styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
    }
`

const LeftButton= Styled.div`
background-color:rgba(23, 26, 32, 0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:UPPERCASE;
font-size:12px;
cursor:pointer;
margin:8px;
`

const RigthButton = Styled(LeftButton)`
background:white;
opacity:0.65;
color:black;
`

const DownArrow = Styled.img`
height:40px;
animation:animateDown infinite 1.5s;
cursor:pointer;
display:block;
margin: 0 auto;
`

const Buttons = Styled.div`

`