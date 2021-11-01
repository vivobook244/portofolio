import React, { Component } from 'react'
import { View, TouchableOpacity, TextInput } from 'react-native'
import { Icon } from 'native-base'
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
      <View style={styles.containerPassword}>
        <TextInput
          value={this.props.value}
          onChangeText={value =>
            this.props.onChangeText(value, this.props.type)
          }
          keyboardType={this.props.keyboardType}
          autoCapitalize={this.props.autoCapitalize}
          placeholderTextColor={color.grey}
          placeholder={this.props.placeholder}
          secureTextEntry={!this.props.showPassword}
          style={[
            fontStyles.fontSmallBlackSemiBold,
            styles.subContainerPassword,
            { borderWidth: this.props.error ? 1 : null, borderColor: color.red }
          ]}
        />
        <TouchableOpacity
          onPress={() => this.props.togglePassword()}
          style={styles.containerIcon}>
          <Icon
            type={'MaterialCommunityIcons'}
            name={this.props.showPassword ? 'eye' : 'eye-off'}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    )
  }
}

export default Input
