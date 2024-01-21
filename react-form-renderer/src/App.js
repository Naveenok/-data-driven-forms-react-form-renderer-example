import './App.css';
import MyForm from './Form';
import { ChakraBaseProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraBaseProvider><MyForm /></ChakraBaseProvider>
  );
}

export default App;
