import React from 'react';
import { StyleSheet, 
    Text, 
    View,
    FlatList,
    Button
} from 'react-native';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setPlanets } from '../store/actions';

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home Planets',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    constructor(){
        super();
        this.state = {
            planets : []
        }
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/planets/')
            .then((respon) => this.props.setPlanets(respon.data.results))
        .catch(err => console.log(err))
    }

  render() {
    console.log(this.props)
    return (
      <View style={styles.container}>
      {/* masalah nya planets itu gak ada di array redux nya */}
        <FlatList data={this.props.redux.articles} 
            renderItem={({item}) => {
            return (
                <View>
                    <View>
                        <Text>{item.name}</Text>
                    </View>
                </View>
            )
        }}/>
        <Button 
            title="Go To Second Screen"
            onPress={() => this.props.navigation.navigate('Second')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const mapStateToProps = (state) => {
    return {
      redux: state
    };
  };
  
  const mapDispatchToProps = (dispatch) => bindActionCreators({setPlanets}, dispatch);
  
  export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);