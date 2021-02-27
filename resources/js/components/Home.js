import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components";

const Home = () => {
    return (
        <StyledContainer className="home-container">
            <h2>Welcome to Test App</h2>
            <Button href="login" color="primary">
                Login
            </Button>
            <Button href="register" color="secondary">
                Register
            </Button>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    margin-top: 35vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export default Home;
