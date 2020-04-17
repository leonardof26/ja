import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import { Modal, Alert } from 'react-native';
import { colors } from '@/styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SwipeListView } from 'react-native-swipe-list-view';

import Header from '@/components/Header';
import Button from '@/components/Button';
import FooterButton from '@/components/FooterButton';
import FormGroup from '@/components/FormGroup';
import Container from '@/components/Container';
import ContentView from '@/components/ContentView';

import BackgroundHeader from '@assets/images/background_fase_03.png'
import BackgroundHeaderModal from '@assets/images/top_background_01.png'

import {
  StyledContainer,
  ScrollView,
  AddIdea,
  AddIdeaText,
  ContainerIdea,
  BlockIdeia,
  Content,
  Title,
  Description,
  ButtonCustom,
  Text,
  ContainerModal,
  HeaderModal,
  BodyModal,
  TitleModal,
  Footer,
  Col,
  ContainerSwipe,
  ButtonDelete
} from './styles'
import * as Animatable from 'react-native-animatable';


function saveMenu(ideaForm, ideas, setModalVisible, setIdea, setIdeaForm) {

  if (ideaForm.edit) {
    ideas = ideas.map(item => item.id === ideaForm.edit ? { ...item, title: ideaForm.title, description: ideaForm.description } : item);
    setIdea(ideas);

    setIdeaForm({
      title: '',
      description: '',
      edit: null
    })
    return setModalVisible(false);
  }
  setIdea([
    ...ideas,
    {
      id: ideas.length + 1,
      ...ideaForm
    }
  ])


  setIdeaForm({
    title: '',
    description: '',
    edit: null
  })

  return setModalVisible(false)
}

function deleteItem(item, setIdea, ideas) {
  ideas = ideas.filter(res => res.id !== item.id);
  console.log(ideas)
  setIdea(ideas);
}

const List = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  let [ideas, setIdea] = useState([]);
  let [ideaForm, setIdeaForm] = useState({
    title: '',
    description: '',
    edit: null
  })


  let refButton = '';

  const [popoverVisible, setPopover] = useState(false);

  return (
    <Container>
      <Header
        title="MOTOR DE IDEIAS"
        subtitle="Mostrar a jornada do cliente"
        image={BackgroundHeader}
      />
      <ContentView customStyle={{ alignItems: 'stretch' }}>
        <AddIdea onPress={() => setModalVisible(true)}>
          <FontAwesome color="#A8A8A8" size={18} name="plus" />
          <AddIdeaText>Nova idéia</AddIdeaText>
        </AddIdea>

        <ContainerIdea>

          <SwipeListView
            data={ideas}
            leftOpenValue={0}
            rightOpenValue={-75}
            renderItem={(data, rowMap) => {
              let { item } = data;

              return (
                <Animatable.View animation="bounceIn">
                  <BlockIdeia>
                    <Content>
                      <Title>{item.title}</Title>
                      <Description>{item.description}</Description>
                    </Content>
                    <ButtonCustom onPress={() => {
                      setModalVisible(true);
                      setIdeaForm({
                        title: item.title,
                        description: item.description,
                        edit: item.id
                      })
                    }}>
                      <FontAwesome name="ellipsis-v" color={colors.dark} size={20} />
                    </ButtonCustom>
                  </BlockIdeia>
                </Animatable.View>
              )
            }
            }
            renderHiddenItem={(data, rowMap) => (
              <Animatable.View animation="fadeIn" delay={1000}>
                <ContainerSwipe>
                  <ButtonDelete onPress={() => deleteItem(data.item, setIdea, ideas)}>
                    <FontAwesome name="trash" size={18} color={colors.white} />
                  </ButtonDelete>
                </ContainerSwipe>
              </Animatable.View>
            )}
          />
        </ContainerIdea>
      </ContentView>
      <FooterButton
        onPress={() => {
          if (ideas.length === 0) {
            return Alert.alert('Sem ideias', 'Você precisa cadastrar pelomenos uma idéia');
          }
          return navigation.navigate('Await', { type: 'ideas', ideas });
        }}
        onBack={() => navigation.goBack()}
      />

      <Modal
        animationType="slide"
        transparent={false}
        onRequestClose={() => {
          setIdeaForm({
            title: '',
            description: '',
            edit: false
          })
        }}
        visible={modalVisible}>
        <ContainerModal>
          <HeaderModal
            source={BackgroundHeaderModal}
            resizeMode="cover"
          >
            <SafeAreaView>
              <TitleModal>Ideia</TitleModal>
            </SafeAreaView>
          </HeaderModal>
          <BodyModal>
            <FormGroup
              label="Titulo da idéia"
              baseColor={colors.primary}
              returnKeyType='done'
              textColor={colors.dark}
              defaultValue={ideaForm.title}
              onChangeText={(text) =>
                setIdeaForm({
                  ...ideaForm,
                  title: text
                })}
              labelTextStyle={{
                color: colors.dark
              }}
            />
            <FormGroup
              label="Descrição da ideia"
              baseColor={colors.primary}
              returnKeyType='done'
              multiline={true}
              blurOnSubmit={true}
              textColor={colors.dark}
              defaultValue={ideaForm.description}
              onChangeText={(text) => setIdeaForm({
                ...ideaForm,
                description: text
              })}
              labelTextStyle={{
                color: colors.dark
              }}
            />
          </BodyModal>
          <Footer>
            <Col>
              <Button
                text="Cancelar"
                onPress={() => {
                  setIdeaForm({
                    title: '',
                    description: ''
                  })
                  setModalVisible(false)
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
                onPress={() => saveMenu(ideaForm, ideas, setModalVisible, setIdea, setIdeaForm)}
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