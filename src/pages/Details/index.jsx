import { Link, useParams } from "react-router-dom"
import {useState} from 'react'
import { useEffect } from "react"
import { Container } from "./style"

function Details(){
    const image_path = 'https://image.tmdb.org/t/p/w500'
    const {id} = useParams()
    const [serie, setSerie] = useState([])
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=464de99261f021d6060a1cd3c618dee3&language=pt-BR`)
        .then(response => response.json())
        .then(data => { 

            const serie ={
                //pegar outros atributos
                id,
                titulo: data.name,
                sinopse: data.overview,
                imagem: `${image_path}${data.poster_path}`,
                temporadas: data.number_of_seasons,
                episodios: data.number_of_episodes
            }
            setSerie(serie)
        })
    }, [id])
    return (
        <Container>
            <div className="serie">
                <img src={serie.imagem} alt={serie.sinopse}/>
                <div className="details">
                    <h1>{serie.titulo}</h1>
                    <span>Sinopse: {serie.sinopse}</span>
                    <span className="EpTemp">Temporadas: {serie.temporadas}</span>
                    <span className="EpTemp">Episódios: {serie.episodios}</span>
                    <Link to='/'><button>Voltar ao ínicio</button></Link>
                </div>
            </div>
        </Container>
    )
}
export default Details