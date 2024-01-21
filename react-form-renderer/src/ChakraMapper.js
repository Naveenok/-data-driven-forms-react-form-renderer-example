import { Input, Checkbox, Button } from "@chakra-ui/react";
import componentTypes from '@data-driven-forms/react-form-renderer/component-types';

const ChankraMapper = {
    [componentTypes.TEXT_FIELD]: Input,
    [componentTypes.CHECKBOX]: Checkbox,
    [componentTypes.BUTTON]: Button,
}

export default ChankraMapper;