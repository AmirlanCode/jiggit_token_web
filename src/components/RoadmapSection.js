import React from "react";
import styled from "styled-components";

const pixelFont = "'Press Start 2P', 'Spectral SC', monospace";

const RoadmapSection = styled.section`
  margin: 2.2rem 0 1.5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;
`;

const RoadmapList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  margin: 0;
  list-style: none;
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const RoadmapField = styled.li`
  background: #f7eee1;
  border: 2px solid #c97d3d;
  border-radius: 0.7rem;
  box-shadow: 0 2px 8px 0 #c97d3d11;
  padding: 1.1rem 1.2rem;
  min-width: 120px;
  font-family: ${pixelFont};
  color: #5a3b1b;
  font-size: 0.85rem;
  text-align: center;
  image-rendering: pixelated;
  @media (max-width: 700px) {
    min-width: 0;
    font-size: 0.75rem;
    padding: 0.8rem 0.7rem;
  }
`;

const RoadmapTitle = styled.h2`
  font-family: ${pixelFont};
  color: #c97d3d;
  font-size: 1.6rem;
  margin-bottom: 1.3rem;
  font-weight: 900;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-align: center;
  image-rendering: pixelated;
  text-shadow: 2px 2px 0 #f7eee1, 0 0 10px #c97d3d33;
  @media (max-width: 700px) {
    font-size: 1.1rem;
    margin-bottom: 0.8rem;
  }
`;

const Roadmap = () => (
  <RoadmapSection>
    <RoadmapTitle>ROADMAP</RoadmapTitle>
    <RoadmapList>
      <RoadmapField>Phase 1: Launch & Community</RoadmapField>
      <RoadmapField>Phase 2: Game and competitions</RoadmapField>
      <RoadmapField>Phase 3: Rewards</RoadmapField>
    </RoadmapList>
  </RoadmapSection>
);

export default Roadmap;
