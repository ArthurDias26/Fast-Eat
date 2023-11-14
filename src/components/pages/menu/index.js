import { FoodMenu, MenuTitle, FoodTypes, FoodCards, FoodCard } from "./style"
import { useState, useEffect } from "react";
import MenuItens from "./menuItens.json"

export default function Index() {

    const [menuItens, setMenuItens] = useState([])
    const [menuType, setMenuType] = useState('Tudo')

    useEffect(() =>{
        setMenuItens(MenuItens)
        if (menuType === 'Tudo'){
            setMenuItens(MenuItens.Tudo)
        }
        else if (menuType === 'Pizza'){
            setMenuItens(MenuItens.Pizza)
        }
        else if (menuType === 'Esfirra'){
            setMenuItens(MenuItens.Esfirra)
        }
        else if (menuType === 'Bebida'){
            setMenuItens(MenuItens.Bebida)
        }
        else if (menuType === 'Sobremesa'){
            setMenuItens(MenuItens.Sobremesa)
        }
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

            {menuType === "Pizza" ? 'tamanho' : null}

            {menuType === "Tudo" ? 'tamanho' : null}

            <FoodCards>
                {Array.isArray(menuItens) ? menuItens.map((item) => (
                    <FoodCard>
                        
                        <img src={item.image} alt={"imagem" + item.title}/>
                        <h2>{item.title}</h2>
                        <p>{item.ingredientes? item.ingredientes : null}</p>
                        <p>R${item.price}</p>
                        <button>Adicionar</button>
                    </FoodCard>
                )) :
                null}
            </FoodCards>
        </FoodMenu>
        
    )
}