// External libraries
import React, { useEffect, useState } from 'react'

// Components
import Sidebar from '../../common/Sidebar'
import ChatbotModal from './components/ChatbotModal'
import Button from '../../common/Button'

// Styled
import theme from '../../../styles/theme'
import {
  Container,
  Content,
  SidebarContent
} from './styles'

const Chatbot: React.FC = () => {
  const [isOpenChatbotModal, setIsOpenChatbotModal] = useState(false)

  const handleCloseChatbotModal = () => {
    setIsOpenChatbotModal(false)
  }

  const [adviceMessage, setAdviceMessage] = useState()

  useEffect(() => {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then(data => setAdviceMessage(data.slip.advice))
      .catch((err) => {
        console.error('Oops! An error occurred in ', err)
      })
  }, [isOpenChatbotModal])

  return (
    <Container>
      <SidebarContent>
        <Sidebar chatbot={true} />
      </SidebarContent>
      <Content>
        <Button
          title='CHATBOT'
          width='240px'
          height='54px'
          color={theme.colors.text}
          colorHover={theme.colors.primary}
          backgroundColor={theme.colors.gray_700}
          backgroundColorHover={theme.colors.gray_400}
          border='none'
          borderRadius='10px'
          fontSize='16px'
          fontWheight={600}
          onClick={() => setIsOpenChatbotModal(true)}
        />
      </Content>
      <ChatbotModal
        advice={adviceMessage}
        isOpen={isOpenChatbotModal}
        onRequestClose={handleCloseChatbotModal}
      />
    </Container>
  )
}

export default Chatbot
