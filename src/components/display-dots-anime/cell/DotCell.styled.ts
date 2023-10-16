import styled from "@emotion/styled";

export const Dot = styled.div`
  background: #000000;
  border-radius: 50%;
  display: inline-block;
  height: 0.425rem;
  width: 0.425rem;
  margin: 0.085rem;
  opacity: ${({ isDeactivated }: { isDeactivated: boolean }) =>
    isDeactivated ? 0 : 1};

  @media (max-width: 640em) {
    height: 0.25rem;
    width: 0.25rem;
    margin: 0.05rem;
  }
`;
