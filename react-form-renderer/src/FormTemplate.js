import React from 'react';
import { Box, Button, Stack, FormControl, FormLabel, FormErrorMessage, useMultiStyleConfig } from '@chakra-ui/react';

const ChakraFormTemplate = ({
  formFields, // formFields are React elements here
  // ...otherProps are not shown for brevity
}) => {
  const styles = useMultiStyleConfig('Form', {});

  return (
    <Box as="form" sx={styles.form} /* ...otherProps like onSubmit should be here */>
      <Stack spacing={4}>
        {formFields.map((fieldElement, index) => (
          // Directly include the fieldElement, which is a React element
          <React.Fragment key={index}>
            {fieldElement}
          </React.Fragment>
        ))}
      </Stack>
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default ChakraFormTemplate;
