import React from 'react';
import { AboutSection, AboutWrap, FooterA, FooterContainer, FooterLink, FooterLinksContainer, FooterLinksItems, FooterLinksWrapper, FooterLinkTitle, FooterWrap, Logo, WebRights } from './FooterItems';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {

    const toggleHome = () =>{
        scroll.scrollToTop();
    }

    return(
        <FooterContainer> {/*contains all contents of Footer item */}
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/About">How it works</FooterLink>
                            <FooterLink to="/signin">Terms of services</FooterLink>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>

                        <FooterLinksItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterA href="https://www.youtube.com" target="_blank" >Youtube</FooterA>
                            <FooterA href="https://www.google.com" target="_blank" >Google</FooterA>
                            <FooterA href="https://www.facebook.com" target="_blank" >Facebook</FooterA>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <AboutSection>
                    <AboutWrap>
                        <Logo to="/" onClick={toggleHome}>Food Org</Logo>
                        <WebRights>FoodOrganizer © {new Date().getFullYear()} All rights reserved</WebRights>
                    </AboutWrap>
                </AboutSection>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer