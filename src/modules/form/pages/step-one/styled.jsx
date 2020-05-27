import styled from 'styled-components';

export const StepOneMainContainer = styled.div`
  width: 100%;
  form {
    .firstName {
    grid-area: 1 / 1 / 2 / 2;
  }

  .lastName {
    grid-area: 1 / 2 / 2 / 3;
  }

  .mail {
    grid-area: 2 / 1 / 3 / 2;
  }

  .password {
    grid-area: 3 / 1 / 4 / 2;
  }

  .rePassword {
    grid-area: 3 / 2 / 4 / 3;
  }

  .div6 {
    grid-area: 4 / 2 / 5 / 3;
  }
  }
`;
