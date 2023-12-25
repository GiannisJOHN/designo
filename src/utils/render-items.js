
//it renders list of items inside a component, it is a component enhancer
export function renderItems(data, Component) {
    return data.map((each) => {
        return <Component data={each}/>
    })
}