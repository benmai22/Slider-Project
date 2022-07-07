import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
import { Slider } from '@syncfusion/ej2-inputs';
import {
  SliderTooltipEventArgs,
  SliderTickEventArgs,
} from '@syncfusion/ej2-inputs';
//Benjamin Mai, 7/07/2022
// Initialize Slider component
let rangeObj: any = new Slider({
  // Set the initial range values for slider
  value: [25, 70],
  // Set slider minimum and maximum values
  min: -5,
  max: 5,
  // Initialize tooltip with placement and format
  tooltip: {
    placement: 'Before',
    isVisible: true,
    // Formatting tooltip value in currency with 2-decimal specifier.
    format: 'c0',
  },
  // Initialize ticks with placement, largestep, smallstep and format
  ticks: {
    placement: 'After',
    largeStep: 1,
    smallStep: 1,
    showSmallTicks: true,
    // Formatting ticks value in currency with 3-decimal specifier.
    format: 'c0',
  },
  // Set the type to render range slider
  type: 'Range',
  created: (args: any) => {
    rangeObj.openTooltip();
  },
});
rangeObj.appendTo('#range');
