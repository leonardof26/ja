import React, { useState } from 'react';

import { StyledContainer } from './styles';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import FooterButton from '@/components/FooterButton';

function renderPage(page) {
  switch (page) {
    case 1:
      return (
        <Page1 />
      )
    case 2:
      return (
        <Page2 />
      )

    case 3:
      return (
        <Page3 />
      )
  }
}

const HowWorking = ({ navigation }) => {
  let [page, setPage] = useState(1);
  let game = navigation.getParam('game');
  let setGame = navigation.getParam('setGame');
  return (
    <StyledContainer>
      {renderPage(page)}
      <FooterButton
        text="Próximo"
        single={page === 1}
        onBack={() => {
          if (page === 1) {
            return navigation.goBack();
          }
          setPage(page - 1);
        }}
        onPress={() => {
          if (page === 3) {
            const forms = {
              ...game.forms,
              how_working: {
                ...game.forms.how_working,
                verify: 3,
                enable: false
              },
              how_created_startup: {
                ...game.forms.how_created_startup,
                enable: true
              }
            }
            setGame({ forms });
            return navigation.navigate('Home')
          }

          setPage(page + 1);
        }}
      />
    </StyledContainer>
  )
}

export default HowWorking;