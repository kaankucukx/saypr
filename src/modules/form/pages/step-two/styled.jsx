import styled from 'styled-components';

export const StepTwoMainContainer = styled.div`
  width: 100%;
  .phoneNumber {
    grid-area: 1 / 1 / 2 / 2;
  }

  .country {
    grid-area: 2 / 1 / 3 / 2;
  }

  .state {
    grid-area: 1 / 2 / 2 / 3;
  }

  .street {
    grid-area: 2 / 2 / 3 / 3;
  }

  .postalCode {
    grid-area: 1 / 5 / 2 / 6;
  }

  .ghost {
    grid-area: 4 / 1 / 5 /2;
  }

  .div6 {
    grid-area: 4 / 2 / 5 / 3;
  }
`;
