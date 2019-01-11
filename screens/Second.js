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

class SecondScreen extends React.Component {
    static navigationOptions = {
        title: 'Second Planets',
        headerStyle: {
            backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
            data={this.props.redux.articles}
            renderItem={({item}) => {
            return ( 
                <View>
                    <Text>{item.name}</Text>
                </View>
                )
            }}
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(SecondScreen);