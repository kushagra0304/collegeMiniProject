import "./accordion.css"

// const Accordion = ({title, icon, Content}) => {
//     return (
//         <>
//             <details className="accordion">
//                 <summary>
//                     <div className="accordion__title">
//                         <svg class="icon icon-accordion color-foreground-text" aria-hidden="true" focusable="false" role="presentation" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
//                             {icon}
//                         </svg>
//                         <p>{title}</p>
//                     </div>
//                     <svg class="icon icon-caret" aria-hidden="true" focusable="false" role="presentation" viewBox="0 0 10 6">
//                         <path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z" fill="currentColor"></path>
//                     </svg>
//                 </summary>
//                 <div className="accordion__content">
//                     <Content/>
//                 </div>
//             </details>
//         </>
//     )
// }

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