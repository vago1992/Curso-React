import React from 'react'
import Items from './Items'
import './Menu.css';

export const ItemList = ({mangas}) => {
    return (
        <div>
            {mangas.map(m=><Items key={m.id} mangas={m}/>)}
        </div>
    )
}

