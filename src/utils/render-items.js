
//renders list inside a component
export function renderItems(data, Component) {
    return data.map((each) => {
        return <Component data={each}/>
    })
}