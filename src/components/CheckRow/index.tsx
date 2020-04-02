// Dependencies
import React from 'react';
import { CheckBox, CheckBoxProps } from 'react-native-elements';

// Components
import BaseRow, { BaseRowProps } from '../BaseRow';

/**
 * @interface CheckRowProps
 * @description The properties definition of check row.
 */
export interface CheckRowProps extends BaseRowProps {
  /**
   * Flag to checking the input.
   * @default false
   */
  checked: boolean;

  /**
   * Callback to communicate when the value changed.
   */
  onValueChange?: (isChecked: boolean) => void;

  /**
   * The properties pass to checkbox.
   */
  checkboxProps: CheckBoxProps;
}

/**
 * @component CheckRow
 * @author Daniel Mejia
 * @description Row component for settings list with a checkbox.
 */
export function CheckRow(props: CheckRowProps): React.ReactElement {
  const { checked, onValueChange, checkboxProps } = props;
  const [isChecked, setChecked] = React.useState(checked);
  const onChange = (): void => {
    setChecked(!isChecked);
    onValueChange?.(!isChecked);
  };

  return (
    <BaseRow
      {...props}
      rightContent={(
        <CheckBox
          {...checkboxProps}
          checked={isChecked}
          onPress={onChange}
        />
      )}
    />
  );
}

export default CheckRow;
