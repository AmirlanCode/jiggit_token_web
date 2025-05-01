import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Main component for the standalone token address display
const TokenAddressContainer = styled(motion.div)`
  background: linear-gradient(135deg, #f7eee1, #f0e6d6);
  border: 3px solid #daa520;
  border-radius: 0.7rem;
  box-shadow: 0 4px 12px rgba(218, 165, 32, 0.4),
    inset 0 0 20px rgba(255, 215, 0, 0.2);
  padding: 1.2rem;
  margin: 1.5rem auto;
  width: 100%;
  max-width: 650px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(255, 215, 0, 0.1) 0%,
      rgba(218, 165, 32, 0.1) 50%,
      rgba(255, 215, 0, 0.1) 100%
    );
    z-index: 0;
  }

  @media (max-width: 900px) {
    padding: 1rem;
    border-width: 2px;
    margin: 1.2rem auto;
  }

  @media (max-width: 600px) {
    padding: 0.8rem;
    margin: 1rem auto;
  }
`;

const TokenAddressLabel = styled.h3`
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 1.1rem;
  color: #8b4513;
  margin: 0 0 0.8rem 0;
  text-align: center;
  text-shadow: 1px 1px 0 #daa520, 0 0 5px rgba(255, 215, 0, 0.5);
  position: relative;
  z-index: 1;

  @media (max-width: 900px) {
    font-size: 1rem;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 600px) {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const AddressText = styled.div`
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #daa520;
  border-radius: 0.5rem;
  padding: 0.8rem 1rem;
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 0.9rem;
  color: #5a3b1b;
  text-align: center;
  word-break: break-all;
  position: relative;
  z-index: 1;
  overflow-wrap: break-word;
  box-shadow: inset 0 1px 3px rgba(139, 69, 19, 0.2);
  background: linear-gradient(
    to right,
    rgba(255, 215, 0, 0.05),
    rgba(255, 215, 0, 0.1),
    rgba(255, 215, 0, 0.05)
  );

  @media (max-width: 900px) {
    font-size: 0.8rem;
    padding: 0.7rem;
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
    padding: 0.6rem 0.8rem;
    border-width: 1px;
  }
`;

const GoldenShimmer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 215, 0, 0.2) 50%,
    transparent 100%
  );
  z-index: 2;
`;

// Navbar version of token address components
const NavTokenAddressContainer = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(
    90deg,
    rgba(255, 215, 0, 0.15),
    rgba(218, 165, 32, 0.25)
  );
  border: 2px solid #daa520;
  border-radius: 1rem;
  padding: 0.3rem 0.6rem;
  margin-left: auto;
  margin-right: 0.6rem;
  position: relative;
  overflow: hidden;
  max-width: 360px;

  @media (max-width: 1100px) {
    max-width: 280px;
  }

  @media (max-width: 900px) {
    order: 4;
    width: 100%;
    max-width: 100%;
    margin: 0.3rem auto;
    justify-content: center;
  }

  @media (max-width: 600px) {
    padding: 0.2rem 0.4rem;
    border-width: 1px;
  }
`;

const NavAddressLabel = styled.span`
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 0.75rem;
  color: #8b4513;
  white-space: nowrap;
  margin-right: 0.5rem;
  text-shadow: 0.5px 0.5px 0 #daa520;

  @media (max-width: 600px) {
    font-size: 0.65rem;
    margin-right: 0.3rem;
  }
`;

const NavAddressText = styled.div`
  font-family: "Press Start 2P", "Spectral SC", monospace;
  font-size: 0.7rem;
  color: #5a3b1b;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 200px;

  @media (max-width: 1100px) {
    max-width: 150px;
  }

  @media (max-width: 900px) {
    max-width: 480px;
  }

  @media (max-width: 600px) {
    font-size: 0.6rem;
    max-width: 240px;
  }
`;

const NavGoldenShimmer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 215, 0, 0.3) 50%,
    transparent 100%
  );
  z-index: 2;
  pointer-events: none;
`;

// Main component for standalone display
const TokenAddressComponent = ({ address }) => (
  <TokenAddressContainer
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <GoldenShimmer
      animate={{
        left: ["-100%", "200%"],
        transition: {
          repeat: Infinity,
          duration: 3,
          repeatDelay: 5,
        },
      }}
    />
    <TokenAddressLabel>Token Address</TokenAddressLabel>
    <AddressText>{address}</AddressText>
  </TokenAddressContainer>
);

// Navbar version component
export const NavTokenAddress = ({ address }) => (
  <NavTokenAddressContainer>
    <NavGoldenShimmer
      animate={{
        left: ["-100%", "200%"],
        transition: {
          repeat: Infinity,
          duration: 2.5,
          repeatDelay: 4,
        },
      }}
    />
    <NavAddressLabel>Token:</NavAddressLabel>
    <NavAddressText>{address}</NavAddressText>
  </NavTokenAddressContainer>
);

export default TokenAddressComponent;
