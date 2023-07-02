import React from 'react'

function ProductGrid(props) {
    return (
        <section className='container product-grid-container'>
            {props.children}
        </section>
    )
}

export default ProductGrid