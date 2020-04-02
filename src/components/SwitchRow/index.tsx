// Dependencies
import React from 'react';
import { Switch, SwitchProps } from 'react-native';

// Components
import BaseRow, { BaseRowProps } from '../BaseRow';

/**
 * @interface SwitchRowProps
 * @description The properties definition of switch row.
 */
export interface SwitchRowProps extends BaseRowProps {
  /**
   * Flag to checking the input.
   * @default false
   */
  enabled: boolean;

  /**
   * Callback to communicate when the value changed.
   */
  onValueChange?: (isEnabled: boolean) => void;

  /**
   * The properties pass to checkbox.
   */
  switchProps: SwitchProps;
}

/**
 * @component SwitchRow
 * @author Daniel Mejia
 * @description Row component for settings list with a switch.
 */
export function SwitchRow(props: SwitchRowProps): React.ReactElement {
  const { enabled, onValueChange, switchProps } = props;
  const [isEnabled, setEnabled] = React.useState(enabled);
  const onChange = (): void => {
    setEnabled(!isEnabled);
    onValueChange?.(!isEnabled);
  };

  return (
    <BaseRow
      {...props}
      rightContent={(
        <Switch
          {...switchProps}
          onValueChange={onChange}
          value={isEnabled}
        />
      )}
    />
  );
}

export default SwitchRow;
