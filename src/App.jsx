import Attractionscard from "./Components/Attractionscard"
import { Container,Grid } from "@mui/material"
const App = () => {
  
  return (
    <Container>
      <Grid container spacing={3}>
         <Attractionscard/>
         <Attractionscard/>
         <Attractionscard/>
         <Attractionscard/>
      </Grid>
    </Container>
  )
}

export default App
