import React,{useState} from 'react'
import Styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';


function Header() {
    const[butgerStatus,setBurgerStatus] = useState(false);
    return (
        <Container>
            <a>
                <img src='./images/logo.svg' alt='' />
            </a>
            <Menu>
            <a href='#'>Model 3</a>
            <a href='#'>Model X</a>
            <a href='#'>Model Y</a>
            <a href='#'>Model S</a>
            </Menu>
            <RigthMenu>
            <a href='#'>Shop</a>
            <a href='#'>Tesla Account</a>
            </RigthMenu>
            <CustomMenu onClick={()=>setBurgerStatus(true)} />

            <BurgerMenu show={butgerStatus}>
                <CloseWrapper>
                    <CloseButton onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
               
                <li><a href='#'>Model 3</a></li>
                <li><a href='#'>Model X</a></li>
                <li><a href='#'>Model Y</a></li>
                <li><a href='#'>Model S</a></li>
                <li><a href='#'>Existing Inventory</a></li>
            </BurgerMenu>

        </Container>
    )
}

export default Header


const BurgerMenu = Styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background:white;
width:300px;
z-index:16;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
text-align:start;
transition:transform 0.2s;
transform:${props =>props.show ?'translateX(0)' : 'translateX(100%)'};
li{
    padding: 15px o;
    border-bottom:1px solid rgba(0,0,0,.2);
    margin:20px 0;
    a{
        font-weight:700;
        font-size:25px;
    }
}
`

const Container = Styled.div`
min-height:60px;
position:fixed;
display:flex;
align-item:center;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;
`

const Menu = Styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap=nowrap;
}
`

const RigthMenu = Styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`

const CustomMenu =Styled(MenuIcon)`
cursor:pointer;
margin-top:15px;
`

const CloseButton = Styled(CloseIcon)`
    cursor:pointer;
`

const CloseWrapper = Styled.div`
display:flex;
justify-content:flex-end;
`