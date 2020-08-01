import React, {useState} from "react";
import {ButtonsWrapper, Logo, LogoContainer, NavBar, NavBarContainer, Title} from "./Header.style";
import SettingsIcon from '@material-ui/icons/Settings';
import ConnectionStatus from "../../../../components/ConnectionStatus/ConnectionStatus";
import useWebsocket from "../../../../hooks/useWebsocket";
import logo from '../../../../assets/images/logo.png'
// import AnimatedModal from "../../../../components/AnimatedModal";

export default function () {
  const { connected } = useWebsocket();

  return (
    <NavBar>
      <NavBarContainer>
        <LogoContainer>
          <Logo src={logo}/>
          <Title>Stocks Wallet</Title>
        </LogoContainer>
        <ConnectionStatus connected={connected}/>
        <ButtonsWrapper>
          <SettingsIcon onClick={() => console.log('open stocks modal')}/>
        </ButtonsWrapper>
      </NavBarContainer>
      <AnimatedModal
        closeModal={}
        isOpen={}>

      </AnimatedModal>
    </NavBar>
  );
}
