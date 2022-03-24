import React from 'react'
import { Container, Grid, Typography } from '@mui/material';

import styled from 'styled-components';
import aboutImage from  '../img/aboutImage.jpg';


const AboutImage = styled.img`
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.5);
    width: 100%;
    height: auto;
`
const AboutText = styled.div`
    margin-top: 1rem;
    padding: 1rem;
    background-color: #FFFFFF;
    border-radius: 10px;
    text-align: center;  
`;


const About = () => {

  return (
    <Container maxWidth="lg" style={{ marginTop: '2rem', textAlign: 'center' }}>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
                <AboutImage src={aboutImage} alt="aboutImage" />
            </Grid>
            <Grid item xs={12} sm={6}>
                    <Typography variant="h4" gutterBottom style={{ color : '#b57f1e' }}>
                        About us
                    </Typography>
                    <AboutText>
                        <Typography variant="body1" gutterBottom>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nulla in feugiat velit. Integer blandit dolor diam, sit amet cursus purus vehicula a. 
                        Praesent nunc metus, tincidunt eu pellentesque at, maximus non diam. 
                        Nulla rutrum felis sed nisi placerat, nec fermentum sem efficitur. 
                        Sed iaculis diam ac laoreet tincidunt. 
                        Phasellus elit purus, pellentesque eu mauris at, blandit interdum odio. S
                        ed interdum dolor et felis feugiat, eu lacinia turpis lobortis. 
                        In posuere ante turpis, quis condimentum sapien blandit a.
                        </Typography>

                        <Typography variant="body1" gutterBottom>
                        Aliquam facilisis a odio ac egestas. Nunc aliquet viverra dapibus. 
                        Phasellus sodales, quam non congue sodales, ante dolor varius arcu, non eleifend eros nisi eu nibh
                        Nulla rutrum felis sed nisi placerat, nec fermentum sem efficitur. 
                        Sed iaculis diam ac laoreet tincidunt. 
                        Phasellus elit purus, pellentesque eu mauris at, blandit interdum odio. S
                        ed interdum dolor et felis feugiat, eu lacinia turpis lobortis. 
                        In posuere ante turpis, quis condimentum sapien blandit a.
                        </Typography>
                    </AboutText>
            </Grid>
        </Grid>

        
    </Container>
  )
}

export default About