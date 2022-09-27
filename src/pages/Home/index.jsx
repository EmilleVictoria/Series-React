import { Container, SerieList, Serie } from "./style";
import {useState, useEffect} from "react"

function Home(){

    const [series, setSeries] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        //objetivo de consumir a api...

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=464de99261f021d6060a1cd3c618dee3&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => setSeries(data.results))

    }, [])

    return(
    <Container>
        <h1>Séries</h1>
        <SerieList>

            {series.map(serie =>{
                return(
                    <Serie key={serie.id}>
                        <a href='#'><img src={`${image_path}${serie.poster_path}`} alt={serie.titulo}/></a>
                        <span>{serie.name}</span>
                    </Serie>
                )
            })}
        </SerieList>
    </Container>
    )
}
export default Home;