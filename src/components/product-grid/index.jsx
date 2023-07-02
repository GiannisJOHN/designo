import React from 'react'

function ProductGrid(props) {
    return (
        <section className='container product-grid-container section-space'>
            {props.children}
        </section>
    )
}

export default ProductGrid