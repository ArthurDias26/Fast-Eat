import { FoodMenu, MenuTitle, FoodTypes, FoodCards, FoodCard } from "./style"
import { useState, useEffect } from "react";
import MenuItens from "./menuItens.json"

export default function Index() {

    const [menuItens, setMenuItens] = useState([])
    const [menuType, setMenuType] = useState('Tudo')

    useEffect(() =>{
        setMenuItens(MenuItens)
        if (menuType == 'Tudo'){
            setMenuItens(MenuItens.Tudo)
            console.log('foi')
        }
        else if (menuType == 'Pizza'){
            setMenuItens(MenuItens.Pizza)
        }
        else if (menuType == 'Esfirra'){
            setMenuItens(MenuItens.Esfirra)
        }
        else if (menuType == 'Bebida'){
            setMenuItens(MenuItens.Bebida)
        }
        else if (menuType == 'Sobremesa'){
            setMenuItens(MenuItens.Sobremesa)
        }
        console.log(menuType)
        console.log(menuItens)
    }, [menuType])

    return(
        <FoodMenu>
            <MenuTitle>
                <h1>|CARDÁPIO</h1>
            </MenuTitle>

            <FoodTypes>
                <button onClick={() => setMenuType('Tudo')}>Tudo</button>

                <button onClick={() => setMenuType('Pizza')}>Pizzas</button>

                <button onClick={() => setMenuType('Esfirra')}>Esfirras</button>

                <button onClick={() => setMenuType('Bebida')}>Bebidas</button>

                <button onClick={() => setMenuType('Sobremesa')}>Sobremesas</button>

            </FoodTypes>

            <FoodCards>
                {menuItens.Pizza?.map((item) => (
                <h1>{item.title}</h1>
                ))}
            </FoodCards>
        </FoodMenu>
        
    )
}