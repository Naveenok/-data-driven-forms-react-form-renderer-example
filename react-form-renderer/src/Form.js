import React from "react";
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import componentTypes from "@data-driven-forms/react-form-renderer/component-types";
import ChankraMapper from "./ChakraMapper";

const schema = {
    fields: [
        {
            component: componentTypes.TEXT_FIELD,
            name: 'name',
            label: ' name'
        }, {
            component: componentTypes.CHECKBOX,
            name: 'subscribe',
            label: ' subscribe to newsletter'
        }
    ]
}

const MyForm = () => {
    const onSubmit = (values) => {
        console.log(values)
    }

    return (
        <FormRenderer
            schema={schema}
            componentMapper={ChankraMapper}
            onSubmit={onSubmit}
        />
    )
}

export default MyForm;