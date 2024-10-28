import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Titulo from "../../components/Titulo";
// import videos from '../../json/db.json'
import styles from './Inicio.module.css';


// OUTRA FORMA DE IMPORTAR, PORÉM POUCO USADA
// const { default: Cabecalho } = require("components/Cabecalho");
// const { default: Rodape } = require("components/Rodape");

function Inicio() {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Rayssa-Nunes/cinetag-api/videos')
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [])

    return (
        <>
            <Banner imagem='home' />
            <Titulo>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Titulo>
            <section className={styles.container} >
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}                
            </section>
        </>
    )
}

export default Inicio;