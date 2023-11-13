import { LinkButton } from "./style"
import { Link } from "react-router-dom"

export default function index({link, text}){

    return(
        <LinkButton>
            <Link to={link}>
                    <span>{text}</span>
            </Link>
        </LinkButton>
    )
}