import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import FormRenderer from '@data-driven-forms/react-form-renderer/form-renderer';
import ChakraMapper from './ChakraMapper';
import ChakraFormTemplate from './FormTemplate';

const schema = {
    fields: [
        {
            component: 'text-field',
            name: 'name',
            label: 'Your Name',
        },
        {
            component: 'checkbox',
            name: 'terms',
            label: 'I agree to terms and conditions',
        },
    ],
};

const MyForm = () => {
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <ChakraProvider>
            <FormRenderer
                schema={schema}
                componentMapper={ChakraMapper}
                FormTemplate={ChakraFormTemplate}
                onSubmit={onSubmit}
            />
        </ChakraProvider>
    );
};

export default MyForm;
