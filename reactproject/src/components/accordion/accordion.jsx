import "./accordion.css"

const Accordion = ({title, content}) => {
    return (
        <div className="accordion">
            <details>
                <summary>
                    <div className="accordion__title">
                        <h2 className="title h4">{title}</h2>
                        <div className="accordion__caret">
                            <svg className="caret" aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 10 6">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor"></path>
                            </svg>
                        </div>
                    </div>
                </summary>
                <div className="accordion__content">{content}</div>
            </details>
        </div>
    )
}

export default Accordion;