import * as React from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

//import createFirebaseClient from '../../components/firebase';
import wallyTitle from '../../../assets/wallyTitle.png';
import stylesLogIn from '../../styles/styles';

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: 'Basurero Inteligente: Wally'
  };

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: '',
      password: '',
      response: ''
    };

    //this.firebaseClient = createFirebaseClient();
  }

  /* _logIn = async () => {
    try {
      await this.firebaseClient
        .auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password);

      this.setState({
        response: 'Bienvenido!'
      });
      this.props.navigation.navigate('Home');
    } catch (error) {
      this.setState({
        response: error.toString()
      });
      console.info(this.state.response);
    }
  }; */

  _onSearchEmailUser = event => {
    this.setState({
      email: event.nativeEvent.text
    });
  };

  _onSearchPasswordUser = event => {
    this.setState({
      password: event.nativeEvent.text
    });
  };

  _onSignUpPressed = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    const spinner = this.state.isLoading ? (
      <ActivityIndicator size='large' />
    ) : null;
    return (
      <View style={styles.containerLogIn}>
        <Image source={wallyTitle} style={styles.imageTitle} />
        <View style={styles.flowRight}>
          <TextInput
            autoCorrect={false}
            keyboardType='email-address'
            onChange={this._onSearchEmailUser}
            placeholder='Correo'
            placeholderTextColor='#656565'
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchUser}
          />
          <TextInput
            autoCorrect={false}
            onChange={this._onSearchPasswordUser}
            placeholder='Contraseña'
            placeholderTextColor='#656565'
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            value={this.state.searchPassword}
          />
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.button}>INGRESAR</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._onSignUpPressed.bind(this)}>
            <Text style={styles.button}>REGISTRARSE</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.descriptionLogIn}> ¿Olvido su contraseña? </Text>
        <Text style={styles.descriptionLogIn}>{this.state.message}</Text>
        {spinner}
      </View>
    );
  }
}

const styles = stylesLogIn;