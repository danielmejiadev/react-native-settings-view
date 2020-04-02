// Dependencies
import React from 'react';
import { View, Text, StyleProp, TouchableOpacity, TextStyle } from 'react-native';
import { Icon, IconProps, Divider, DividerProps } from 'react-native-elements';

// Styles
import styles from './styles';

/**
 * @interface BaseRowProps
 * @description The properties definition of base row.
 */
export interface BaseRowProps {
  /**
   * The on press function for the row.
   */
  onPress?: () => void;

  /**
   * The properties for the left icon.
   */
  leftIcon: IconProps;

  /**
   * The text of the row.
   */
  text: string;

  /**
   * The content at the rigth side of the row.
   */
  rightContent: React.ReactNode;

  /**
   * The styles applied to the text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * The content of the row.
   */
  children: React.ReactNode;

  /**
   * The properties for the divider of row.
   */
  dividerProps: DividerProps;
}

/**
 * @component BaseRow
 * @author Daniel Mejia
 * @description Common row component for settings list.
 */
export function BaseRow(props: BaseRowProps): React.ReactElement {
  const { onPress, leftIcon, text, rightContent, textStyle, children, dividerProps } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.containerItem}>
        <View style={styles.containerRow}>
          {leftIcon && <Icon containerStyle={styles.iconLeft} {...leftIcon} />}
          <Text style={[styles.text, textStyle]} numberOfLines={1} ellipsizeMode="tail">
            {text}
          </Text>
          <View style={styles.rightContent}>
            {rightContent}
          </View>
        </View>
        {children}
      </View>
      <Divider {...dividerProps} />
    </TouchableOpacity>
  );
}

export default BaseRow;
