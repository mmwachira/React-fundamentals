import React from 'react';

function ListRender(){

    const products = [
        { title: 'T-shirt', isAccessory: false, id: 1},
        { title: 'Glasses', isAccessory: true, id: 2},
        { title: 'Socks', isAccessory: false, id: 3},
    ];

    const listItems = products.map(product =>
            <li
            key={product.id}
            style={{color: product.isAccessory ? 'magenta' : 'darkgreen'}}
            >
                {product.title}
            </li>
        );

    return(
        <ul>{listItems}</ul>

    )

}

export default ListRender;