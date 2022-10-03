import { Container, SerieList, Serie } from "./style";
import {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import Filtro from "../Filtro";


function Home(){
    const [filtroValue, setFiltroValue] = useState('')
    const [seriesFiltradas,setSeriesFiltradas] = useState([])
    const [series, setSeries] = useState([])
    const image_path = 'https://image.tmdb.org/t/p/w500'


    useEffect(() => {
        //objetivo de consumir a api...

        fetch(`https://api.themoviedb.org/3/tv/popular?api_key=464de99261f021d6060a1cd3c618dee3&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            setSeries(data.results)
            setSeriesFiltradas(data.results)
        })

    }, [])   




    function handleFiltroValue(value) {
        setFiltroValue(value)
        const serieDigitada = series.filter(serie => { return serie.name.toLowerCase().includes(value.toLowerCase())})
        setSeriesFiltradas(serieDigitada)
    }

    return(
    <Container>
        <h1>Séries</h1>


        <Filtro onChangeFiltroValue={handleFiltroValue} />

        <SerieList>

            {seriesFiltradas.map(serie =>{
                return(
                    <Serie key={serie.id}>

                        <Link to={`/details/${serie.id}`}><img src={`${image_path}${serie.poster_path}`} alt={serie.titulo}/></Link>
                        <span>{serie.name}</span>
                    </Serie>
                )
            })}
        </SerieList>
    </Container>
    )
}
export default Home;