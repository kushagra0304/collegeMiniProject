import "./accordion.css"

const Accordion = ({title, Content}) => {
    return (
        <>
            <details>
                <summary>{title}</summary>
                <Content/>
            </details>
        </>
    )
}

export default Accordion;