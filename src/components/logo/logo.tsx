import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeColor } from "data/const";
import { useState } from "react";
import styled from "styled-components";

const Logo = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    return (
        <>
            <TitleContainer>
                <Menu onClick={()=>{setMenuClicked(!menuClicked); console.log("click")}}>
                    <FontAwesomeIcon icon={faBars} />
                </Menu>
                <Title href="/">
                    Happyhour
                </Title>            
            </TitleContainer>
            {menuClicked && 
                <div style={{position: "fixed", left: "2%", top: "calc(7% + 10px)", zIndex: 1}}>
                    <div style={{ border: "none", backgroundColor: "#6cd082", zIndex: 1, borderRadius: "10px", padding: "5px", color: "white", marginBottom: "3px"}}>
                        About Us
                    </div>
                    <div style={{border: "none", backgroundColor: "#6cd082", zIndex: 1, borderRadius: "10px", padding: "5px", color: "white"}}>
                        Send Email
                    </div>   
                </div>             
            }
        </>

    )
}
const TitleContainer = styled.div`
    position: fixed;
    left: 2%;
    top: 2%;    
    z-index: 1;
    display: flex;
    height: 3em;
`

const Menu = styled.div`
    background-color: ${ThemeColor.main};
    border-radius: 15px;
    margin-right: 0.5em;
    height: 3em;
    width: 3em;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

const Title = styled.a`
    border: none;
    border-radius: 15px;
    background-color: ${ThemeColor.main};
    color: white;
    padding: 0.7em;
    font-weight: 600;
    height: 3em;
`

export default Logo;