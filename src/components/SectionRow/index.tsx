// Dependencies
import React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';

// Styles
import styles from './styles';

/**
 * @interface SectionRowProps
 * @description The properties definition of section row page.
 */
export interface SectionRowProps {
  /**
   * The content of the settings page.
   */
  children: React.ReactNode;

  /**
   * The title of the section.
   */
  title: string;

  /**
   * The styles applied to the container of section.
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The content of the settings page.
   */
  titleStyle?: StyleProp<TextStyle>;
}

/**
 * @component SectionRow
 * @author Daniel Mejia
 * @description Section to contains multiple rows.
 */
export function SectionRow(props: SectionRowProps): React.ReactElement {
  const { children, title, containerStyle, titleStyle } = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.containerSection}>
        {title && <Text style={[styles.title, titleStyle]} ellipsizeMode="tail">{title}</Text>}
      </View>
      <View>{children}</View>
    </View>
  );
}

export default SectionRow;
