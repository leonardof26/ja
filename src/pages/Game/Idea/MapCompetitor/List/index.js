import React, { useState } from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { Modal, Alert } from 'react-native'
import Container from '@/components/Container'
import ContentView from '@/components/ContentView'
import Header from '@/components/Header'

import { colors } from '@/styles'

import BackgroundHeader from '@assets/images/background_fase_03.png'
import BackgroundHeaderModal from '@assets/images/top_background_01.png'

import {
  BlockHeader,
  Row,
  Figure,
  BlockText,
  TitleBlock,
  SubtitleBlock,
  Circle,
  CircleText,

  AddIdea,
  AddIdeaText,


  ContainerModal,
  HeaderModal,
  BodyModal,
  TitleModal,
  Footer,
  Col,

  Fieldset,
  TitleFieldset,

  Group,
  Description,
  Label,
  GroupRadio,

  Radio,
  RadioText,

  BlockCompetitor,
  TitleCompetitor,
  DescriptionCompetitor,
  RowCompetitor,
  LabelLevel,
  BlockLevel,
  BlockLevelText
} from './styles';

import { SafeAreaView } from 'react-navigation'
import FormGroup from '@/components/FormGroup'
import Button from '@/components/Button'
import FooterButton from '@/components/FooterButton'


const List = ({ navigation }) => {
  const [modal, setModal] = useState(false);
  let [competitors, setCompetitors] = useState([]);
  let [competitor, setCompetitor] = useState({
    id: null,
    name: '',
    description: '',
    levels: {
      x: null,
      y: null,
      z: null
    }
  });

  return (
    <Container
      customStyle={{
        paddingBottom: 150
      }}
    >
      <Header
        image={BackgroundHeader}
        title="mapear concorrentes"
        subtitle="Criar concorrentes"
      />
      <BlockHeader>
        <Row>
          <Figure>
            <Circle>
              <CircleText>A</CircleText>
            </Circle>
          </Figure>
          <BlockText>
            <TitleBlock>Característica A</TitleBlock>
            <SubtitleBlock>Descrição da característica A</SubtitleBlock>
          </BlockText>
        </Row>
        <Row>
          <Figure>
            <Circle>
              <CircleText>B</CircleText>
            </Circle>
          </Figure>
          <BlockText>
            <TitleBlock>Característica B</TitleBlock>
            <SubtitleBlock>Descrição da característica B</SubtitleBlock>
          </BlockText>
        </Row>
        <Row>
          <Figure>
            <Circle>
              <CircleText>C</CircleText>
            </Circle>
          </Figure>
          <BlockText>
            <TitleBlock>Característica C</TitleBlock>
            <SubtitleBlock>Descrição da característica C</SubtitleBlock>
          </BlockText>
        </Row>
      </BlockHeader>
      <ContentView>
        <AddIdea onPress={() => setModal(true)}>
          <FontAwesome color="#A8A8A8" size={18} name="plus" />
          <AddIdeaText>Nova idéia</AddIdeaText>
        </AddIdea>

        {
          competitors.length > 0 && (
            competitors.map(item => (
              <BlockCompetitor>
                <TitleCompetitor>{item.name}</TitleCompetitor>
                <DescriptionCompetitor>{item.description}</DescriptionCompetitor>
                <RowCompetitor>
                  <LabelLevel>Característica X</LabelLevel>
                  <BlockLevel>
                    <BlockLevelText>{item.levels.x}</BlockLevelText>
                  </BlockLevel>
                </RowCompetitor>
                <RowCompetitor>
                  <LabelLevel>Característica Y</LabelLevel>
                  <BlockLevel>
                    <BlockLevelText>{item.levels.y}</BlockLevelText>
                  </BlockLevel>
                </RowCompetitor>
                <RowCompetitor>
                  <LabelLevel>Característica Z</LabelLevel>
                  <BlockLevel>
                    <BlockLevelText>{item.levels.z}</BlockLevelText>
                  </BlockLevel>
                </RowCompetitor>
              </BlockCompetitor>
            ))
          )
        }
      </ContentView>


      <FooterButton
        onPress={() => navigation.navigate('Congratulation')}
        onBack={() => navigation.goBack()}
        disabled={competitors.length === 0}
        customStyles={competitors.length === 0 ? {
          backgroundColor: '#bbb'
        } : {}}
      />

      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
      >
        <ContainerModal>
          <HeaderModal
            source={BackgroundHeaderModal}
            resizeMode="cover"
          >
            <SafeAreaView>
              <TitleModal>concorrentes</TitleModal>
            </SafeAreaView>
          </HeaderModal>
          <BodyModal>
            <Fieldset>
              <TitleFieldset>DADOS DO CONCORRENTE</TitleFieldset>
              <Group>
                <FormGroup
                  baseColor={colors.primary}
                  textColor={colors.dark}
                  multiline={true}
                  blurOnSubmit={true}
                  label="Concorrente"
                  maxLength={26}
                  onChangeText={(text) => {
                    setCompetitor({
                      ...competitor,
                      name: text
                    });
                  }}
                  customStyles={{
                    marginBottom: 0,
                    height: 80
                  }}
                />
                <Description>{competitor.name.length}/26</Description>
              </Group>

              <Group>
                <FormGroup
                  baseColor={colors.primary}
                  textColor={colors.dark}
                  multiline={true}
                  blurOnSubmit={true}
                  label="Descrição do concorrente"
                  maxLength={120}
                  onChangeText={(text) => {
                    setCompetitor({
                      ...competitor,
                      description: text
                    })
                  }}
                  customStyles={{
                    marginBottom: 0
                  }}
                />
                <Description>{competitor.description.length}/120</Description>
              </Group>
            </Fieldset>

            <Fieldset>
              <TitleFieldset>nível do concorrente</TitleFieldset>
            </Fieldset>
            <Group
              style={{
                borderBottomWidth: 1,
                borderColor: '#EAEAEA',
                paddingBottom: 16
              }}
            >
              <Label>Característica X</Label>

              <GroupRadio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.x === 'baixo' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        x: 'baixo'
                      }
                    });
                  }}
                >
                  <RadioText>baixo</RadioText>
                </Radio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.x === 'médio' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        x: 'médio'
                      }
                    });
                  }}
                >
                  <RadioText>médio</RadioText>
                </Radio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.x === 'alto' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        x: 'alto'
                      }
                    });
                  }}
                >
                  <RadioText>alto</RadioText>
                </Radio>
              </GroupRadio>
            </Group>

            <Group
              style={{
                borderBottomWidth: 1,
                borderColor: '#EAEAEA',
                paddingBottom: 16
              }}
            >
              <Label>Característica Y</Label>

              <GroupRadio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.y === 'baixo' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        y: 'baixo'
                      }
                    });
                  }}
                >
                  <RadioText>baixo</RadioText>
                </Radio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.y === 'médio' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        y: 'médio'
                      }
                    });
                  }}
                >
                  <RadioText>médio</RadioText>
                </Radio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.y === 'alto' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        y: 'alto'
                      }
                    });
                  }}
                >
                  <RadioText>alto</RadioText>
                </Radio>
              </GroupRadio>
            </Group>
            <Group>
              <Label>Característica Z</Label>

              <GroupRadio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.z === 'baixo' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        z: 'baixo'
                      }
                    });
                  }}
                >
                  <RadioText>baixo</RadioText>
                </Radio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.z === 'médio' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        z: 'médio'
                      }
                    });
                  }}
                >
                  <RadioText>médio</RadioText>
                </Radio>
                <Radio
                  style={{
                    backgroundColor: competitor.levels.z === 'alto' ? colors.secundary : colors.dark
                  }}
                  onPress={() => {
                    setCompetitor({
                      ...competitor,
                      levels: {
                        ...competitor.levels,
                        z: 'alto'
                      }
                    });
                  }}
                >
                  <RadioText>alto</RadioText>
                </Radio>
              </GroupRadio>
            </Group>

          </BodyModal>
          <Footer>
            <Col>
              <Button
                text="Cancelar"
                onPress={() => {
                  setCompetitor({
                    id: null,
                    name: '',
                    description: '',
                    levels: {
                      x: null,
                      y: null,
                      z: null
                    }
                  })
                  return setModal(false)
                }}
                customStyles={{
                  backgroundColor: 'transparent',
                  paddingHorizontal: 0,
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                customStylesText={{
                  color: '#A5A5A5'
                }}
              />
            </Col>
            <Col>
              <Button
                text="Salvar"
                onPress={() => {
                  console.log(competitors);
                  setCompetitors([
                    ...competitors,
                    competitor
                  ]);

                  setCompetitor({
                    id: null,
                    name: '',
                    description: '',
                    levels: {
                      x: null,
                      y: null,
                      z: null
                    }
                  })

                  return setModal(false);
                }}
                customStyles={{
                  paddingHorizontal: 0,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%'
                }}
              />
            </Col>
          </Footer>
        </ContainerModal>
      </Modal>
    </Container>
  )
}

export default List;