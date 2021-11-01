import React, { Component } from 'react'
import { View, TextInput } from 'react-native'
import { color } from '../../styles/ColorList'
import fontStyles from '../../styles/FontStyles'
import styles from './StyleInput'
class Input extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.containerInput}>
        <TextInput
          multiline={this.props.multiline}
          value={this.props.value}
          onChangeText={value =>
            this.props.onChangeText(value, this.props.type)
          }
          keyboardType={this.props.keyboardType}
          autoCapitalize={this.props.autoCapitalize}
          placeholderTextColor={color.grey}
          placeholder={this.props.placeholder}
          style={[
            fontStyles.fontSmallBlackSemiBold,
            styles.subContainerInput,
            { borderWidth: this.props.error ? 1 : null, borderColor: color.red }
          ]}
        />
      </View>
    )
  }
}

export default Input
