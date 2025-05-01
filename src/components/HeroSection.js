import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import TokenAddressComponent from "./TokenAddressContainer";

// Enhanced Hero Section with improved visibility and responsiveness
const HeroRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  gap: 2.7rem;
  position: relative;
  z-index: 5;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
    max-width: 98vw;
    margin: 1rem auto;
  }

  @media (max-width: 600px) {
    gap: 0.7rem;
    margin: 0.5rem auto;
    padding: 0.5rem;
  }
`;

const MascotCircle = styled(motion.div)`
  width: 320px;
  height: 320px;
  border-radius: 50%;
  overflow: hidden;
  border: 12px solid #8b4513;
  box-shadow: 0 0 0 3px #8b4513, 0 0 0 24px #daa52022, 0 0 45px 2px #daa52055;
  background: radial-gradient(circle at center, #ffd700 0%, #daa520 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  position: relative;
  z-index: 2;

  &::before {
    content: "";
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 50%;
    background: linear-gradient(45deg, #daa520 0%, #ffd700 50%, #daa520 100%);
    z-index: -1;
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.1);
    filter: brightness(1.1) contrast(1.1);
  }

  @media (max-width: 900px) {
    width: 220px;
    height: 220px;
    border-width: 8px;
    margin: 1.5rem auto;

    &::before {
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
    }
  }

  @media (max-width: 600px) {
    width: 180px;
    height: 180px;
    border-width: 6px;
    margin: 1rem auto;
    box-shadow: 0 0 0 2px #8b4513, 0 0 0 16px #daa52022, 0 0 25px 2px #daa52055;

    &::before {
      top: -6px;
      left: -6px;
      right: -6px;
      bottom: -6px;
    }
  }
`;

const HeroTextCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 520px;
  width: 100%;
  padding: 0.3rem;
  position: relative;
  z-index: 3;

  @media (max-width: 900px) {
    max-width: 90vw;
    padding: 1rem;
  }

  @media (max-width: 600px) {
    padding: 0.5rem;
  }
`;

const Title = styled(motion.h1)`
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 2.2rem;
  font-weight: 900;
  color: #c97d3d;
  margin: 0 0 1.5rem 0;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 0 #e8b03b, 0 0 8px #c97d3d;
  text-align: center;
  text-transform: uppercase;
  image-rendering: pixelated;

  @media (max-width: 900px) {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    letter-spacing: 1.5px;
  }
`;

const HeroTextCard = styled.div`
  background: #f7eee1;
  border: 2px solid #c97d3d;
  border-radius: 0.7rem;
  box-shadow: 0 4px 12px 0 #c97d3d22;
  padding: 1.5rem;
  font-family: "Press Start 2P", "Spectral SC", monospace;
  color: #5a3b1b;
  font-size: 1rem;
  margin: 1rem 0;
  width: 100%;
  text-align: center;
  image-rendering: pixelated;

  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 1.2rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 1rem;
    margin: 0.7rem 0;
  }
`;

const BuyButton = styled(motion.button)`
  background: linear-gradient(135deg, #ffd700, #daa520);
  color: #181818;
  border: 2.5px solid #8b4513;
  border-radius: 1.3rem;
  padding: 0.4rem 1.15rem;
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 1rem;
  font-weight: 900;
  box-shadow: 1.5px 2.5px 0 0 #8b4513, inset 0 0 5px rgba(139, 69, 19, 0.5);
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
    box-shadow: 1px 2px 0 0 #8b4513, inset 0 0 3px rgba(139, 69, 19, 0.5);
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

const BottomBuyButton = styled(motion.button)`
  background: linear-gradient(135deg, #ffd700, #daa520);
  color: #181818;
  border: 2.5px solid #8b4513;
  border-radius: 1.3rem;
  padding: 0.4rem 1.15rem;
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 1rem;
  font-weight: 900;
  box-shadow: 1.5px 2.5px 0 0 #8b4513, inset 0 0 5px rgba(139, 69, 19, 0.5);
  text-decoration: none;
  transition: all 0.17s ease;
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  margin: 1.5rem auto;

  @media (max-width: 900px) {
    font-size: 0.9rem;
    padding: 0.35rem 0.9rem;
    border-width: 2px;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.7rem;
    border-width: 2px;
    box-shadow: 1px 2px 0 0 #8b4513, inset 0 0 3px rgba(139, 69, 19, 0.5);
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

const HeroSection = () => (
  <HeroRow>
    <MascotCircle
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 180, damping: 20 }}
    >
      <img
        src="/assets/mascot.png"
        alt="Jiggit Mascot"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "scale(1.1)",
          filter: "brightness(1.1) contrast(1.1)",
        }}
      />
    </MascotCircle>
    <HeroTextCol>
      <Title
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        $JIGGIT
      </Title>
      <HeroTextCard>
        <b>JIGGIT — THE SPIRIT OF CENTRAL ASIA ON THE BLOCKCHAIN</b>
        <br />
        <br />
        JIGGIT is a cryptocurrency designed to spark global interest to Central
        Asia and power a new economy for tourism, culture, and local
        communities.
      </HeroTextCard>
    </HeroTextCol>
  </HeroRow>
);

export default HeroSection;
