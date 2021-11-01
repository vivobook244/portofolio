import React, { Component } from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'
import styles from '../styles/StyleRegisterType'
import { withNavigation } from 'react-navigation'
class RegisterType extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.registerPopup}
        onRequestClose={() => this.props.close()}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Text style={styles.textTitle}>Register Your Account as</Text>
            <View style={styles.containerButton}>
              <TouchableOpacity
                onPress={() => {
                  this.props.close()
                  this.props.navigation.navigate('RegisterConsultant')
                }}
                style={styles.buttonConsultant}>
                <Text style={styles.textConsultant}>Consultant</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  this.props.close()
                  this.props.navigation.navigate('RegisterUser')
                }}
                style={styles.buttonUser}>
                <Text style={styles.textUser}>User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

export default withNavigation(RegisterType)
