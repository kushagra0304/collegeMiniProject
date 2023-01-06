import "./popover.css"
import { useEffect } from "react"

const Popover = ({ name, items }) => {

    //This can be improved!
    useEffect(() => {
        document.addEventListener("click", (event)=>{
            const active = document.querySelector(".popover__active");
            let targetEl = event.target; // clicked element

            do {
              if(targetEl == active) {
                return;
              }

              targetEl = targetEl.parentNode;
            } while (targetEl);

            if(active !== null){
                active.querySelector(".popover__name").click();
                active.classList.remove("popover__active");
            }
        })
    }, [])

    const handler = (event, name) => {
        const active = document.querySelector(".popover__active")
        const me = document.querySelector(`.${name}`)

        if(active !== null && active.classList.contains(name)){
            active.classList.remove("popover__active")
            return
        }

        if(active !== null){
            active.querySelector(".popover__name").click()
            active.classList.remove("popover__active")
        }

        me.classList.add("popover__active")
        return;
    }

    return (
        <div className={`popover popover__${name}`} onClick={(event) => handler(event, `popover__${name}`)}>
            <details>
                <summary>
                    <span className="popover__name">{name}</span>
                    <span className="popover__icon"><i className="fas fa-chevron-down"></i></span>
                </summary>
                <ul tabIndex="-1">
                    {items.map((item) => (<li><a href="#">{item}</a></li>))}
                </ul>
            </details>
        </div>
    )
}

export default Popover;