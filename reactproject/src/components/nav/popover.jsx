const Popover = ({ name, items }) => {
    return (
        <>
            <details-disclosure>
                <details>
                    <summary>
                        <span>{name}</span>
                    </summary>
                    <ul tabindex="-1">
                        {items.map((item) => (<li><a href="#">{item}</a></li>))}
                    </ul>
                </details>
            </details-disclosure>
        </>
    )
}

export default Popover;