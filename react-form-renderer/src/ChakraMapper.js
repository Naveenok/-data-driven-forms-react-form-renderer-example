import { Input, Checkbox, Button } from '@chakra-ui/react';
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';

// Define your component mapper
const ChakraMapper = {
  [componentTypes.TEXT_FIELD]: Input,
  [componentTypes.CHECKBOX]: Checkbox,
  [componentTypes.BUTTON]: Button,
  // add other components as needed
};

export default ChakraMapper;
