import { useEffect } from "react"
import { NotFound } from "./style"

export default function Index() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return(
        <NotFound>
            <div>
                <h1>Error 404</h1>
                <p>Pagina não encontrada, para voltar <a href="/">Clique aqui</a></p>  
            </div>
        </NotFound>
    )
}