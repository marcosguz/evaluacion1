const colors = [
    '#845EC2',
    '#D65DB1',
    '#FF6F91',
    '#FF9671',
    '#FFC75F',
    '#F9F871',
    '#2C73D2',
    '#0089BA',
    '#008E9B',
    '#008F7A'
]

const ChanceColor = () => {

    const randomColorIndex = Math.floor(Math.random() * colors.length)
    const color = colors[randomColorIndex]

    document.body.style = `background: ${color}`

    return (
        <div>
            
        </div>
    )
}

export default ChanceColor