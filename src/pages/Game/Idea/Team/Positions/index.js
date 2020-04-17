import React, { useState } from 'react';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

import PositionsActions from '@/store/ducks/positions'

import {
  Text,
  Row,
  Col,
  Button,
  Content,
  FormContainer
} from './styles'

import BackgroundHeader from '@assets/images/background_fase_03.png'
import Avatar from '@assets/images/avatars/1.png'

import Header from '@/components/Header';
import Container from '@/components/Container';
import ItemUser from '@/components/ItemUser';
import ContentView from '@/components/ContentView';
import FooterButton from '@/components/FooterButton';
import { colors } from '@/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormGroup from '@/components/FormGroup';
import { Alert } from 'react-native';


const Positions = ({ navigation, route: { params }, getPositionsRequest, positions }) => {

  const [position, setPosition] = useState([]);

  getPositionsRequest();

  return (
    <Container>
      <Header
        title="ORGANIZAR TIME"
        subtitle="Escolha um cargo"
        image={BackgroundHeader}
      />
      <ContentView customStyle={{ alignItems: 'stretch', paddingBottom: 150 }}>
        <ItemUser
          data={{
            name: "Vinícius",
            position: "Selecione um dos cargos abaixo",
            avatar: Avatar
          }}
          customTitleStyle={{
            fontSize: 16,
            color: colors.secundary
          }}
          customSubtitleStyle={{
            fontSize: 10,
            color: 'rgba(16, 33, 36, 0.5)'
          }}
          customContainer={{
            marginBottom: 5
          }}
        />

        <Content>
          {
            positions.map((obj, i) => (
              <RadioButton
                labelHorizontal={true}
                key={i}
              >
                <Row>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={position.index === i}
                    borderWidth={2}
                    buttonInnerColor={colors.primary}
                    buttonOuterColor={position.index === i ? colors.primary : '#A8A8A8'}
                    buttonSize={13}
                    buttonOuterSize={25}
                    onPress={(value, index) => setPosition({
                      value: value,
                      index: index
                    })}
                  />
                  <Col>
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      labelStyle={{
                        fontSize: 16,
                        color: colors.dark,
                        textAlign: 'left',
                        width: '100%',
                        paddingLeft: 12
                      }}
                      onPress={(value, index) => setPosition({
                        value: value,
                        index: index
                      })}
                    />
                    {obj.description && <Button
                      onPress={(value, index) => setPosition({
                        value: obj.value,
                        index: i
                      })}
                    >
                      <Text>{obj.description}</Text>
                    </Button>}
                  </Col>
                </Row>
              </RadioButton>
            ))
          }
          {position.value === 'c?o' &&
            <FormContainer>
              <FormGroup
                label="Nome do cargo"
                baseColor={colors.primary}
                textColor={colors.dark}
              />
              <FormGroup
                label="Descrição do experimento"
                multiline={true}
                blurOnSubmit={true}
                baseColor={colors.primary}
                textColor={colors.dark}
              />
            </FormContainer>
          }
        </Content>
      </ContentView>

      <FooterButton
        onBack={() => navigation.goBack()}
        onPress={() => {
          if(!position) {
            return Alert.alert('Selecione um cargo', 'Para prosseguir com o game é preciso escolher um cargo.')
          }
          return navigation.navigate('Await');
        }}
      />
    </Container >
  )
}

const mapStateToProps = ({ positions }) => ({
  positions: positions.data
})

const mapDispatchToProps = dispatch => (bindActionCreators(PositionsActions, dispatch))

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Positions);
