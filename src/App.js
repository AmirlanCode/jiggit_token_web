import React from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import { FaTelegram, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AnimatedBg from "./components/AnimatedBg";
import HeroSection from "./components/HeroSection";
import Roadmap from "./components/RoadmapSection";
import TokenAddressComponent from "./components/TokenAddressContainer";

// Refined pixel palette for dark orange, yellow, brown
const darkOrange = "#c97d3d";
const richBrown = "#5a3b1b";
const goldYellow = "#f7c873";
const deepYellow = "#e8b03b";
const lightBrown = "#a67c52";
const pixelDark = "#23190f";
const pixelLight = "#f7eee1";

// Assign main colors
const background = pixelDark;
const primary = darkOrange;
const secondary = goldYellow;
const accent = deepYellow;
const cardBg = pixelLight;
const cardBorder = richBrown;
const textMain = richBrown;
const textSubtle = lightBrown;

// Pixel font
const pixelFont = `'Press Start 2P', 'Spectral SC', monospace`;

// Enhanced mobile responsiveness for Navbar
const Navbar = styled.nav`
  width: 98vw;
  max-width: 98vw;
  margin: 0.5rem auto;
  background: #fff1b8;
  border-radius: 1.7rem;
  border: 4px solid #181818;
  box-shadow: 2px 6px 0 0 #181818;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.4rem 1.5rem;
  min-height: 3.7rem;
  gap: 1.1rem;
  font-family: ${pixelFont};
  position: sticky;
  top: 0.5rem;
  z-index: 1000;

  @media (max-width: 900px) {
    width: 95vw;
    max-width: 95vw;
    padding: 0.3rem 1rem;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  @media (max-width: 600px) {
    width: 94vw;
    max-width: 94vw;
    padding: 0.3rem 0.5rem;
    gap: 0.4rem;
    border-width: 3px;
    border-radius: 1.2rem;
  }
`;

const NavbarToken = styled.div`
  font-family: ${pixelFont};
  font-size: 1.6rem;
  font-weight: 900;
  color: #181818;
  white-space: nowrap;

  @media (max-width: 900px) {
    font-size: 1.4rem;
    order: 1;
  }

  @media (max-width: 600px) {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
`;

const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.8rem;

  @media (max-width: 900px) {
    order: 2;
    justify-content: center;
    width: 100%;
    gap: 0.6rem;
    margin: 0.3rem 0;
  }
`;

const NavbarLinkButton = styled.a`
  background: #fff1b8;
  color: #181818;
  border: 2.5px solid #181818;
  border-radius: 1.3rem;
  padding: 0.4rem 1.15rem;
  font-family: ${pixelFont};
  font-size: 1rem;
  font-weight: 900;
  box-shadow: 1.5px 2.5px 0 0 #181818;
  text-decoration: none;
  transition: all 0.17s ease;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;

  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.35rem 0.9rem;
    border-width: 2px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    border-width: 2px;
    box-shadow: 1px 2px 0 0 #181818;
  }

  &:hover {
    background: ${accent};
    color: #fff1b8;
    border-color: ${accent};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${accent}66;
  }
`;

const NavbarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: auto;

  @media (max-width: 900px) {
    order: 3;
    gap: 0.8rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
    gap: 0.6rem;
    margin: 0.2rem 0;
  }
`;

const NavbarIcon = styled.a`
  color: #181818;
  font-size: 1.25rem;
  opacity: 0.96;
  text-decoration: none;
  transition: color 0.17s, opacity 0.17s;
  &:hover {
    color: ${accent};
    opacity: 1;
  }
`;

const NavbarBuyButton = styled.a`
  background: linear-gradient(135deg, #ffd700, #daa520);
  color: #181818;
  border: 2.5px solid #8b4513;
  border-radius: 1.3rem;
  padding: 0.4rem 1.15rem;
  font-family: ${pixelFont};
  font-size: 1rem;
  font-weight: 900;
  box-shadow: 1.5px 2.5px 0 0 #8b4513, inset 0 0 5px rgba(139, 69, 19, 0.5);
  text-decoration: none;
  margin-left: 0.6rem;
  transition: all 0.17s ease;
  cursor: pointer;
  white-space: nowrap;
  overflow: visible;
  text-overflow: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;

  @media (max-width: 900px) {
    font-size: 0.85rem;
    padding: 0.3rem 0.9rem;
    margin-left: 0.2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.75rem;
    padding: 0.2rem 0.6rem;
    margin: 0.15rem;
    border-radius: 1rem;
    box-shadow: 0.5px 1.5px 0 0 #8b4513, inset 0 0 3px rgba(139, 69, 19, 0.5);
  }

  &:hover {
    background: linear-gradient(135deg, #ffe066, #e6b800);
    color: #181818;
    border-color: #8b4513;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(218, 165, 32, 0.6),
      inset 0 0 5px rgba(139, 69, 19, 0.5);
  }
`;

// Responsive App Container
const AppContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  padding: 0;
  margin: 1.5rem auto 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-x: hidden;

  @media (max-width: 900px) {
    margin: 1rem auto 0;
  }

  @media (max-width: 600px) {
    margin: 0.5rem auto 0;
  }
`;

const MascotBottom = styled.img`
  display: block;
  margin: 2rem auto 0 auto;
  width: 210px;
  height: auto;
  image-rendering: pixelated;
  filter: drop-shadow(0 8px 32px #c97d3d44);
  @media (max-width: 700px) {
    width: 120px;
    margin-top: 1.2rem;
  }
`;

const BottomSection = styled.section`
  width: 100vw;
  background: ${primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 0 2.5rem 0;
  margin-top: 0;
  border-radius: 0 0 1.5rem 1.5rem;
  min-height: 320px;
  position: relative;
  z-index: 11;
  overflow: hidden;
  @media (max-width: 900px) {
    border-radius: 0 0 1rem 1rem;
    min-height: 180px;
    padding: 0 0 1.2rem 0;
  }
  @media (max-width: 600px) {
    border-radius: 0 0 0.6rem 0.6rem;
    min-height: 120px;
    padding: 0 0 0.5rem 0;
  }
`;

const BottomBuyButton = styled.a`
  display: block;
  margin: 2.2rem auto 0 auto;
  background: linear-gradient(135deg, #ffd700, #daa520);
  color: #181818;
  border: 2.5px solid #8b4513;
  font-family: ${pixelFont};
  font-size: 2rem;
  font-weight: bold;
  border-radius: 2.5rem;
  padding: 1.2rem 3.5rem;
  box-shadow: 0 4px 0 0 ${richBrown};
  text-align: center;
  text-decoration: none;
  transition: background 0.18s, color 0.18s, border 0.18s, box-shadow 0.18s;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem;
    margin: 1.1rem auto 0 auto;
  }
  @media (max-width: 600px) {
    font-size: 0.85rem;
    padding: 0.3rem 0.7rem;
    margin: 0.5rem auto 0 auto;
    border-width: 2px;
  }
`;

const BottomSubtext = styled.div`
  color: ${richBrown};
  font-family: ${pixelFont};
  font-size: 1rem;
  margin: 1.5rem auto 0 auto;
  opacity: 0.7;
  text-align: center;
  @media (max-width: 900px) {
    font-size: 0.8rem;
    margin: 0.8rem auto 0 auto;
  }
  @media (max-width: 600px) {
    font-size: 0.7rem;
    margin: 0.3rem auto 0 auto;
  }
`;

const BottomMascot = styled.img`
  display: block;
  margin: 2.5rem auto 0 auto;
  width: 210px;
  height: auto;
  image-rendering: pixelated;
  filter: drop-shadow(0 8px 32px #c97d3d44);
  border-radius: 1.2rem 1.2rem 2.5rem 2.5rem;
  @media (max-width: 900px) {
    width: 120px;
    margin-top: 1.2rem;
    border-radius: 0.7rem 0.7rem 1.5rem 1.5rem;
  }
  @media (max-width: 600px) {
    width: 70px;
    margin-top: 0.6rem;
    border-radius: 0.4rem 0.4rem 0.8rem 0.8rem;
  }
`;

// Add global styles to fix mobile overflows
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
  
  html {
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AnimatedBg />
      <Navbar>
        <NavbarToken>$JIGGIT</NavbarToken>
        <NavbarLinks>
          <NavbarLinkButton
            href="https://t.me/+rTaGxEFQEW44NDJi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Telegram
          </NavbarLinkButton>
          <NavbarLinkButton
            href="https://medium.com/@zerobladeamir"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </NavbarLinkButton>
          <NavbarLinkButton
            href="https://x.com/AmirlanSol"
            target="_blank"
            rel="noopener noreferrer"
          >
            X
          </NavbarLinkButton>
          <NavbarLinkButton
            href="/assets/jiggit_whitepaper.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whitepaper
          </NavbarLinkButton>
          <NavbarBuyButton
            href="https://app.cetus.zone/swap/0x2::sui::SUI/0x355fb0acf3dfac10aa51d083e75cb1491940a639aa9cc117dba198135e0ccb44::jiggit::JIGGIT"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy $JIGGIT
          </NavbarBuyButton>
        </NavbarLinks>
        <NavbarIcons>
          {/* Example icons, replace href and icons as needed */}
          <NavbarIcon href="#">
            <i className="fa fa-paper-plane" />
          </NavbarIcon>
          <NavbarIcon href="#">
            <i className="fa fa-times" />
          </NavbarIcon>
          <NavbarIcon href="#">
            <i className="fa fa-podcast" />
          </NavbarIcon>
          <NavbarIcon href="#">
            <i className="fa fa-user-secret" />
          </NavbarIcon>
          <NavbarIcon href="#">
            <i className="fa fa-gift" />
          </NavbarIcon>
        </NavbarIcons>
      </Navbar>
      <AppContainer>
        <HeroSection />
        <TokenAddressComponent address="0x355fb0acf3dfac10aa51d083e75cb1491940a639aa9cc117dba198135e0ccb44" />
        <Roadmap />
      </AppContainer>
      <BottomSection>
        <BottomBuyButton
          href="https://app.cetus.zone/swap/0x2::sui::SUI/0x355fb0acf3dfac10aa51d083e75cb1491940a639aa9cc117dba198135e0ccb44::jiggit::JIGGIT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buy $Jiggit
        </BottomBuyButton>
        <BottomSubtext>→ Powered by Jiggit token team</BottomSubtext>
        <BottomMascot src="/assets/mascot_bottom.png" alt="Jiggit Mascot" />
      </BottomSection>
    </>
  );
}

export default App;
