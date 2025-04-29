import styled from 'styled-components';

const AnimatedBg = styled.div`
  position: fixed;
  top: 0; left: 0; width: 100vw; height: 100vh;
  z-index: 0;
  background: linear-gradient(180deg, #23190f 0%, #5a3b1b 100%);
  &:after {
    content: '';
    position: absolute;
    top: 0; left: 0; width: 100vw; height: 100vh;
    pointer-events: none;
    background: repeating-linear-gradient(135deg, #e8b03b11 0 4px, transparent 4px 16px, #a67c5211 16px 20px, transparent 20px 32px);
    opacity: 0.25;
    animation: pixelAnim 13s linear infinite;
  }
  @keyframes pixelAnim {
    0% { background-position: 0 0; }
    100% { background-position: 128px 128px; }
  }
`;

export default AnimatedBg;
