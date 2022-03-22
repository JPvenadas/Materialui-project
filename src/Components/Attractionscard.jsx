import { Paper, Grid, Typography,Box, Rating } from "@mui/material"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Attractionscard = () => {
  return (
    <Grid item lg={3}>
         <Paper elevation={5}>
            <img className="img" src="https://tcproduction.blob.core.windows.net/media/%7B240f8b72-1159-4fd3-a150-0a837f50ba4a%7D.2573758641_297d6d19fa_o.jpg" alt="" />
            <Box sx={{padding: '4px 10px'}}>
            <Typography variant='h6' component='h2'>Immerse into the Falls</Typography>
             <Box sx={{display: 'flex', alignItems: 'center'}}>
                <AccessTimeIcon sx={{fontSize:'14px'}}/>
                <Typography marginLeft={0.5} variant='body2' component='span'>5 hours</Typography>
             </Box>
             <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '20px'}}>
              <Rating name="Tourism-Rates" size="small" value={4.5} precision={0.5} readOnly />
              <Typography marginLeft={0.5} variant="body2" component="h4">4.5</Typography>
              <Typography marginLeft={2} variant="body2" component="h4">(132 reviews)</Typography>
             </Box>
             <Typography variant="h6" component="h3">From $489</Typography>
            </Box>
         </Paper>
    </Grid>
  )
}

export default Attractionscard
