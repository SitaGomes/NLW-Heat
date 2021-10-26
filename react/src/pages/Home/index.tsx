import React from "react"

import { LoginBox } from "../../components/LoginBox"
import { MessageList } from "../../components/MessageList"

import {Container} from "./style"

export const Home: React.FC = () => {

  return (
    <Container>
      <MessageList />
      <LoginBox/>
    </Container>
  )
}

