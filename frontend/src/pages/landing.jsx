import {Header} from "../components/Navbar.jsx";

function Landing() {
    return (
        <>
        <Header/>

        <h1 style={{ fontFamily: "'Allura', cursive", color: 'gold', position: 'fixed',left: 50, top: -20}}>Buscapeli</h1>
        <p style={{color: 'black'}}>¿Recordás esa película que tanto te gustó? <br/>
            Su trama, sus actores... pero no su nombre. En Cinefilia, fans del cine te ayudarán a encontrar ese título leyendo tu descripción para que la encuentres nuevamente.<br/>
            ¡CUIDADO CON LOS SPOILERS!<br/>
        También podés encontrar una recomendación semanal para disfrutar de nuevas obras.</p>
        </>
    );
}

export default Landing;
//  <> y </> encueven varios elementos in agregar otro div, no pueden quedar sueltos
// prara h1, por default es white