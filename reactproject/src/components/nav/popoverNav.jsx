import { Popover, Spacer, Link as GeistLink} from '@geist-ui/core'

const PopoverNav = ({categories, name}) => {

    const content = () => {
        return (
            <div style={{ padding: '0 10px' }}>
                {categories.map((element, index) => {
                if(index == categories.length-1){
                    return (<GeistLink href="#">{element}</GeistLink>)
                } else {
                    return (
                    <>
                        <GeistLink href="#">{element}</GeistLink>
                        <Spacer h={.5} />
                    </>
                    )
                }
                })}
            </div>
        )
    }

    return (
        <Popover content={content}>{name}</Popover>
    )
}

export default PopoverNav;