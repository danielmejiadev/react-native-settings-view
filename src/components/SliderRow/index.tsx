// Dependencies
import React from 'react';
import { Slider, SliderProps } from 'react-native-elements';

// Components
import BaseRow, { BaseRowProps } from '../BaseRow';

/**
 * @interface SliderRowProps
 * @description The properties definition of slider row.
 */
export interface SliderRowProps extends BaseRowProps {
  /**
   * Flag to checking the input.
   */
  value: number;

  /**
   * Callback to communicate when the value changed.
   */
  onValueChange?: (newValue: number) => void;

  /**
   * The properties pass to slider.
   */
  sliderProps: SliderProps;
}

/**
 * @component SliderRow
 * @author Daniel Mejia
 * @description Row component for settings list with a slider.
 */
export function SliderRow(props: SliderRowProps): React.ReactElement {
  const { value, onValueChange, sliderProps } = props;
  const [sliderValue, setValue] = React.useState(value);
  const onChange = (newValue: number): void => {
    setValue(newValue);
    onValueChange?.(newValue);
  };

  return (
    <BaseRow {...props}>
      <Slider
        {...sliderProps}
        value={sliderValue}
        onValueChange={onChange}
      />
    </BaseRow>
  );
}

export default SliderRow;
