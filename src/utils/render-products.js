


export function renderProducts(data, Component) {
    return data.map((each) => {
        return <Component data={each}/>
    })
}