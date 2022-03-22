import Attractionscard from "./Components/Attractionscard"
import { Container,Grid } from "@mui/material"
import SearchAppBar from "./Components/Navbar";

const App = () => {
  
  return (
    <div>
      <SearchAppBar/>
        <Container sx={{marginY: 5}}>
          <Grid container spacing={3}>
            <Attractionscard/>
            <Attractionscard/>
            <Attractionscard/>
            <Attractionscard/>
          </Grid>
        </Container>
    </div>
  )
}

export default App
