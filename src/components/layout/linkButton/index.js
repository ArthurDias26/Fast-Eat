import { LinkButton } from "./style"

export default function index({link, text}){

    return(
        <LinkButton href={link}>{text}</LinkButton>
    )
}