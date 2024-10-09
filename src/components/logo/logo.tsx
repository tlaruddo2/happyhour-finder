import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeColor } from "const/const";
import { useState } from "react";
import styled from "styled-components";

const Logo = () => {
    const [menuClicked, setMenuClicked] = useState(false);

    return (
        <>
            <TitleContainer>
                <Menu onClick={()=>{setMenuClicked(!menuClicked);}}>
                    <FontAwesomeIcon icon={faBars} />
                </Menu>
                <Title href="/">
                    Happy<div style={{height: '0.1rem'}}/>Hour
                </Title>            
            </TitleContainer>
            {menuClicked && 
                <div style={{position: "fixed", left: "2%", top: "calc(7% + 10px)", zIndex: 1, marginTop: "0.5rem", fontSize: "0.9rem"}}>
                    <div style={{ border: "none", backgroundColor: "#6cd082", zIndex: 1, borderRadius: "10px", padding: "5px", color: "white", marginBottom: "0.2rem", textAlign: "center"}}>
                        About Us
                    </div>
                    <div style={{border: "none", backgroundColor: "#6cd082", zIndex: 1, borderRadius: "10px", padding: "5px", color: "white", textAlign: "center"}}>
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
    height: 3rem;
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
    height: 3rem;
    width: 4rem;
    font-size: 0.9rem;
    line-height: 1;
`

export default Logo;