import { Container, SerieList, Serie } from "./style";

function Home(){
    return(
    <Container>
        <h1>Séries</h1>
        <SerieList>
            <Serie>
            <a href='#'><img src='https://br.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg'/></a>
            <span>The Office</span>
            </Serie>
            <Serie>
            <a href='#'><img src='https://br.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg'/></a>
            <span>The Office</span>
            </Serie>
            <Serie>
            <a href='#'><img src='https://br.web.img3.acsta.net/pictures/14/02/04/13/20/128334.jpg'/></a>
            <span>The Office</span>
            </Serie>
        </SerieList>
    </Container>
    )
}
export default Home;