import "./footer.css"
import "../../components/accordion/accordion"
import Accordion from "../../components/accordion/accordion";

const FooterBlock = ({ linkItems, heading }) => {
    return (
        <div className="footer-block">
            <h2 className="footer-block__heading">{heading}</h2>
            <ul className="footer-block__list">
                {linkItems.map((linkItem) => {
                    return (
                        <li>
                            <a href={linkItem.link}>{linkItem.text}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
 
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__content-top page-width">
                <div className="footer__blocks-wrapper">
                    <Accordion/>
                    <FooterBlock heading="Customer Care" linkItems={[
                        {
                            link: "#",
                            text: "Shipping & Returns"
                        },
                        {
                            link: "#",
                            text: "Contact Us"
                        },
                        {
                            link: "#",
                            text: "FAQ'S"
                        },
                        {
                            link: "#",
                            text: "Size Guide"
                        },
                        {
                            link: "#",
                            text: "Retailers"
                        },
                        {
                            link: "#",
                            text: "Wholesale"
                        },
                        {
                            link: "#",
                            text: "AfterPay"
                        },
                        {
                            link: "#",
                            text: "Legal & Privacy"
                        },
                    ]} />
                    <Accordion/>
                    <FooterBlock heading="Our World" linkItems={[
                        {
                            link: "#",
                            text: "About Us"
                        },
                        {
                            link: "#",
                            text: "Ethics & Sustainability"
                        },
                        {
                            link: "#",
                            text: "Giving Back"
                        }
                    ]} />
                    <Accordion/>
                    <FooterBlock heading="Follow" linkItems={[
                        {
                            link: "#",
                            text: "Instagram"
                        },
                        {
                            link: "#",
                            text: "Facebook"
                        },
                        {
                            link: "#",
                            text: "Newsletter"
                        }
                    ]} />
                </div>
            </div>
            <div className="footer__content-bottom"></div>
        </div>
    )
}

export default Footer;