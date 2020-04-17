import React, { useState } from 'react';

import FooterButton from '@/components/FooterButton';
import { StyledContainer } from './styles';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';

function renderPage(page) {
  switch (page) {
    case 1:
      return <Page1 />;
    case 2:
      return <Page2 />;
    case 3:
      return <Page3 />;
    case 4:
      return <Page4 />;
    case 5:
      return <Page5 />;
    default:
      return <Page6 />;
  }
}

const HowCreatedStartup = ({ navigation }) => {
  let [page, setPage] = useState(1);
  let game = navigation.getParam('game');
  let setGame = navigation.getParam('setGame');
  return (
    <StyledContainer>
      {renderPage(page)}
      <FooterButton
        text="Próximo"
        onBack={() => {
          if (page === 1) {
            return navigation.goBack();
          }
          setPage(page - 1);
        }}
        onPress={() => {
          if (page === 6) {
            const forms = {
              ...game.forms,
              how_created_startup: {
                ...game.forms.how_created_startup,
                verify: 6,
                enable: false,
              },
              idea: {
                ...game.forms.idea,
                enable: true,
              },
            };
            setGame({ forms });
            return navigation.navigate('Home');
          }

          setPage(page + 1);
        }}
      />
    </StyledContainer>
  );
};

export default HowCreatedStartup;
