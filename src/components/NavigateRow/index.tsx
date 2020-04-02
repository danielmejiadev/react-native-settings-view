// Dependencies
import React from 'react';
import { Icon, IconProps } from 'react-native-elements';

// Components
import BaseRow, { BaseRowProps } from '../BaseRow';

/**
 * @interface NavigateRowProps
 * @description The properties definition of navigate row.
 */
export interface NavigateRowProps extends BaseRowProps {
  /**
   * The properties pass to icon on the right.
   */
  rightIcon: IconProps;
}

/**
 * @component NavigateRow
 * @author Daniel Mejia
 * @description Row component for settings list with arrow to navigate.
 */
export function NavigateRow(props: NavigateRowProps): React.ReactElement {
  const { rightIcon } = props;

  return (
    <BaseRow
      {...props}
      rightContent={(
        <Icon
          {...rightIcon}
          type="font-awesome"
          name="angle-right"
        />
      )}
    />
  );
}

export default NavigateRow;
