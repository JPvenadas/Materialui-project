import { Paper, Grid, Typography,Box, Rating } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Attractionscard = ({Tour}) => {
  return (
    <Grid item lg={3}>
         <Paper elevation={5}>
            <img className="img" src={Tour.image} alt="" />
            <Box sx={{padding: '4px 10px'}}>
            <Typography variant='h6' component='h2'>{Tour.name}</Typography>
             <Box sx={{display: 'flex', alignItems: 'center'}}>
                <AccessTimeIcon sx={{fontSize:'14px'}}/>
                <Typography marginLeft={0.5} variant='body2' component='span'>{Tour.duration} hours</Typography>
             </Box>
             <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px'}}>
              <Rating name="Tourism-Rates" size="small" value={Tour.rating} precision={0.5} readOnly />
              <Typography  sx={{fontSize: '11px'}} marginLeft={0.5} variant="h3" component="h4">{Tour.rating}</Typography>
              <Typography sx={{fontSize: '10px'}} marginLeft={2} variant="h3" component="h4">{Tour.numberOfReviews}</Typography>
             </Box>
             <Typography variant="h6" component="h3">$ {Tour.price}</Typography>
            </Box>
         </Paper>
    </Grid>
  )
}

export default Attractionscard
