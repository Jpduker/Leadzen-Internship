
import './App.css';
import Users from './Users'
import { ChakraProvider } from '@chakra-ui/react'
function App() {
  return (
    <ChakraProvider >
    <Users/>
    </ChakraProvider>
    
  );
}

export default App;
