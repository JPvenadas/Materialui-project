import Attractionscard from "./Components/Attractionscard"
import { Container,Grid, Typography } from "@mui/material"
import SearchAppBar from "./Components/Navbar";
import cities from "./data.json"

const App = () => {
  return (
    
    <div>
      <SearchAppBar/>
        <Container sx={{marginY: 5}}>
         {cities.map((city) => (
           <div key={city.id}>
               <Typography marginY={3} variant="h4" component="h1">Top {city.name} Tours</Typography>
                <Grid container spacing={5}>
                  {city.tours.map((tour,index)=>(
                    <Attractionscard key={tour.id} Tour={tour}/>
                  ))}
                </Grid>
           </div>
         ))}
        </Container>
    </div>
  )
}

export default App
