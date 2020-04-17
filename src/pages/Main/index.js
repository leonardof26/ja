import React, { useState } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserActions from '@/store/ducks/user'

import {
  StyledContainer,
  ProgressBar,
  Bar,
  TextProgress
} from './styles';

import BackgroundSplash from '@assets/images/background-splash.jpg';
import storage from '@/utils/storage';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 0
    }
  }


  async componentDidMount() {
    let { progress } = this.state;
    let { getUserRequest, navigation } = this.props;
    const token = await storage.getToken();

    console.log('token: ', token);

    setTimeout(async () => {
      let init = setInterval(() => {
        if (progress === 100) {

          clearInterval(init);

          if (token) {
            return getUserRequest();
          }

          return navigation.navigate('Login');
        }

        progress = progress + 10;
        this.setState({ progress });

      }, 500)
    }, 2000);
  }


  componentWillReceiveProps(props) {
    let { user, navigation, error } = props;
    const { progress } = this.state;

    if (error) {
      storage.removeToken();
      return navigation.navigate('Login')
    }

    console.log('user: ', user)

    if (user && progress >= 100) {
      if (user.first_access) {
        return navigation.navigate('Introduction');
      }
      return navigation.navigate('Home');
    }
  }



  render() {
    let { progress } = this.state;
    return (
      <StyledContainer source={BackgroundSplash}>
        <TextProgress>{progress}%</TextProgress>
        <ProgressBar>
          <Bar style={{ width: `${progress}%` }} />
        </ProgressBar>
      </StyledContainer>
    );
  }
};


const mapStateToProps = ({ user }) => ({
  user: user.data,
  error: user.error
})

const mapDispatchToProps = dispatch => (bindActionCreators(UserActions, dispatch))

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
