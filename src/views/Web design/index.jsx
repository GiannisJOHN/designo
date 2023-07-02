import React from 'react'
import App from '../../components/app'
import PageHeader from '../../components/page-header'
import ProductGrid from '../../components/product-grid'
import ProductCard from '../../components/product-card'
import { renderProducts } from '../../utils/render-products'
import webdesignData from '../../data/webdesign-data'


function WebDesign() {

    

    return (
        <App>
            <PageHeader
                title='Web Design'
                text='We build websites that serve as powerful marketing tools and bring memorable brand experiences.'/>
            <ProductGrid>
                {renderProducts(webdesignData, ProductCard)}
            </ProductGrid>
        </App>
    )
}

export default WebDesign