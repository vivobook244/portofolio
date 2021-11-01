import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import fontStyles from '../../../styles/FontStyles'
import styles from './StyleButtonFull'
class ButtonFull extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <TouchableOpacity
        disabled={this.props.disabled}
        onPress={() => this.props.action()}
        style={[
          styles.subContainerButton,
          { backgroundColor: this.props.color }
        ]}>
        <Text style={fontStyles.fontSmallWhiteSemiBold}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

export default ButtonFull
