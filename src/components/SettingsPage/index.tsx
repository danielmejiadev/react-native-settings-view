// Dependencies
import React from 'react';
import { ScrollView, ScrollViewProps, View } from 'react-native';

// Styles
import styles from './styles';

/**
 * @interface SettingsPageProps
 * @description The properties definition of settings page.
 */
export interface SettingsPageProps extends ScrollViewProps {
  /**
   * The content of the settings page.
   */
  children: React.ReactNode;
}

/**
 * @component SettingsPage
 * @author Daniel Mejia
 * @description Root component for settings page.
 */
export function SettingsPage(props: SettingsPageProps): React.ReactElement {
  const { children } = props;

  return (
    <ScrollView style={styles.container} {...props}>
      <View style={styles.content}>
        {children}
      </View>
    </ScrollView>
  );
}

export default SettingsPage;
