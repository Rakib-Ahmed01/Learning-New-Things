import { Button, CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function ProductCard() {
  return (
    <Card sx={{ maxWidth: 345, p: 1 }}>
      <CardActionArea sx={{ borderRadius: 1 }}>
        <CardMedia
          component="img"
          height="200px"
          image="https://images.unsplash.com/photo-1674554981425-1d299c58239a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="green iguana"
          sx={{
            borderRadius: 1,
            objectFit: 'cover',
            objectPosition: 'bottom',
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Travel
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
          <Button variant="contained" sx={{ mt: 1 }}>
            Learn More
          </Button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
