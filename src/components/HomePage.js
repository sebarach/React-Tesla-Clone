import React from 'react'
import Styled from "styled-components"
import Section from './Section'

function HomePage() {
    return (
        <Container>
            <Section
            title="Model S"
            description='Order Online Touchless Delivery'
            backgroundImage='model-s.jpg'
            LButtonText='Customize Orden'
            RButtonText='Existing Inventory'
            />
            <Section
            title="Model Y"
            description='Order Online Touchless Delivery'
            backgroundImage='model-Y.jpg'
            LButtonText='Customize Orden'
            RButtonText='Existing Inventory'
            />
            <Section
            title="Model 3"
            description='Order Online Touchless Delivery'
            backgroundImage='model-3.jpg'
            LButtonText='Customize Orden'
            RButtonText='Existing Inventory'
            />
            <Section
            title="Model X"
            description='Order Online Touchless Delivery'
            backgroundImage='model-x.jpg'
            LButtonText='Customize Orden'
            RButtonText='Existing Inventory'
            />
            <Section
            title="Lowest Cost Solar Panel in America"
            description='Money Back guarantee'
            backgroundImage='solar-panel.jpg'
            LButtonText='Order Now'
            RButtonText='Learn More'
            />
            <Section
            title="Accessories"
            description=''
            backgroundImage='accessories.jpg'
            LButtonText='Shop Now'
            />
        </Container>
    )
}

export default HomePage


const Container = Styled.div`
height:100vh;
`