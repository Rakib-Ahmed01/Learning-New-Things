import { Box } from '@mui/material';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: 'darkslateblue',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <ProductCard />
    </Box>
  );
}

export default App;
