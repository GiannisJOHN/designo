import React from 'react'
import App from 'components/shared-components/app'
import PageHeader from 'components/shared-components/page-header'
import ProductGrid from 'components/shared-components/product-grid'
import ProductCard from 'components/shared-components/product-card'
import { renderItems} from 'utils/render-items'
import LinkBox from 'components/shared-components/link-box'
import { useMatches } from "react-router-dom"

//Data
import { webdesignInfo, webdesignData } from 'data/webdesign-data'
import { appdesignInfo, appdesignData } from 'data/appdesign-data'
import { graphicdesignInfo, graphicdesignData } from 'data/graphicdesign-data'

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
                {renderItems(data, ProductCard)}
            </ProductGrid>
            <div className='container links-container section-space'>
                <LinkBox name={info.link1} />
                <LinkBox name={info.link2} />
            </div>
        </App>
    )
}

export default ProductPage