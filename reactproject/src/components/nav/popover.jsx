import "./popover.css"
import { useEffect } from "react"

const Popover = ({ name, items }) => {

    //This can be improved!
    useEffect(() => {
        document.addEventListener("click", (event)=>{
            console.log(name)

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

        if(active !== null && active.classList.contains(name)){
            active.classList.remove("popover__active")
            return
        }

        const popoverElements = document.querySelectorAll(".popover");
        let flag = false;

        for (let i = 0; i < popoverElements.length; i++) {
            for(let j = 0; j < popoverElements[i].classList.length; j++){
                if(popoverElements[i].classList[j] === "popover__active" && !popoverElements[i].classList.contains(`.${name}`)){
                    popoverElements[i].querySelector(".popover__name").click()
                    popoverElements[i].classList.remove("popover__active");
                    flag = true;
                    break;
                }
            }
            if(flag){
                break;
            }
        }

        document.querySelector(`.${name}`).classList.add("popover__active")
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