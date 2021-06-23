import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactNativeCompProps {}

const StyledReactNativeComp = styled.div`
  color: pink;
`;

export function ReactNativeComp(props: ReactNativeCompProps) {
  return (
    <StyledReactNativeComp>
      <h1>Welcome to react-native-comp!</h1>
    </StyledReactNativeComp>
  );
}

export default ReactNativeComp;
