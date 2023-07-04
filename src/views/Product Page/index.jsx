import React from 'react'
import App from '../../components/app'
import PageHeader from '../../components/page-header'
import ProductGrid from '../../components/product-grid'
import ProductCard from '../../components/product-card'
import { renderProducts } from '../../utils/render-products'
import LinkBox from '../../components/link-box'
import { useMatches } from "react-router-dom";

//Data
import { webdesignInfo, webdesignData } from '../../data/webdesign-data'
import { appdesignInfo, appdesignData } from '../../data/appdesign-data'
import { graphicdesignInfo, graphicdesignData } from '../../data/graphicdesign-data'

function ProductPage() {
    let pathname = useMatches()[0].pathname
    let info
    let data

    switch(pathname) {
        case '/webdesign':
        info = webdesignInfo
        data = webdesignData
        break
        case '/appdesign':
        info = appdesignInfo
        data = appdesignData
        break
        case '/graphicdesign':
        info = graphicdesignInfo
        data = graphicdesignData
        break
    }
    
    return (
        <App>
            <PageHeader
                title={info.title}
                text={info.subtitle}/>
            <ProductGrid>
                {renderProducts(data, ProductCard)}
            </ProductGrid>
            <div className='container links-container section-space'>
                <LinkBox name={info.link1} />
                <LinkBox name={info.link2} />
            </div>
        </App>
    )
}

export default ProductPage