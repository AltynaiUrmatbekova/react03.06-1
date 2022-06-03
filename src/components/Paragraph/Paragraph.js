function Paragraph(props) {
    const style = {
        fontSize: props.size,
        color: props.color,
        background: props.background
    };
    return <p style={style}>{props.children}</p>
}

export default Paragraph;