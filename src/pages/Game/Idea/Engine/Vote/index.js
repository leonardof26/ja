import React, { useState } from 'react';
import {
  ButtonVote
} from './styles'


import BackgroundHeader from '@assets/images/background_fase_03.png'
import Avatar from '@assets/images/avatars/1.png'

import Header from '@/components/Header';
import Container from '@/components/Container';
import ItemUser from '@/components/ItemUser';
import ContentView from '@/components/ContentView';
import FooterButton from '@/components/FooterButton';
import { Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '@/styles';


function verifyVote(vote, ideas) {

}

const Vote = ({ navigation, route: { params } }) => {
  let [vote, setVote] = useState([]);

  return (
    <Container>
      <Header
        title="AGORA VAMOS VOTAR NAS IDEIAS?"
        subtitle="Escolha até 3 ideias para votar"
        image={BackgroundHeader}
      />
      <ContentView customStyle={{ alignItems: 'stretch' }}>
        {params.ideas.map((idea, index) => (
          <ItemUser
            key={`vote_${index}`}
            data={{
              avatar: Avatar,
              name: 'Vinícius',
              position: idea.description
            }}
            customStyle={{
              fontSize: 18
            }}
            customSubtitleStyle={{
              fontSize: 12,
              color: '#707070',
              marginTop: 10
            }}
          >
            <ButtonVote
              onPress={() => {
                if (vote.length === 3) {
                  return Alert.alert('Votos completos', 'Você só pode escolher 3 idéias.')
                }
                idea['vote'] = !idea['vote'];

                if (idea['vote']) {
                  setVote([...vote, idea])
                } else {
                  vote = vote.filter(item => item.id !== idea.id);
                  setVote(vote);
                }
              }}
            >
              <FontAwesome name={idea.vote ? 'star' : 'star-o'} size={20} color={colors.primary} />
            </ButtonVote>
          </ItemUser>
        ))}
      </ContentView>

      <FooterButton
        onBack={() => navigation.goBack()}
        onPress={() => {
          if (vote.length === 0) {
            return Alert.alert('Voto incorreto', 'você deve votar em pelomenos 1 idéias.')
          }
          return navigation.navigate('Await', { type: 'votes' });
        }}
      />
    </Container>
  )
}

export default Vote;