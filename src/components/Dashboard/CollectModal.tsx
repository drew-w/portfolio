import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Box,
  Heading,
  Stack,
  HStack,
  VStack,
  Flex,
  Image
} from '@chakra-ui/react'

import { pendingBalance } from '@hooks/wallets'
import { data } from '@hooks/tokens'
import BigNumber from 'bignumber.js'

interface Props {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function CollectModal ({ isOpen, setIsOpen }: Props) {
  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Collect Rewards</ModalHeader>

        <ModalBody>
          <Box
            border='2px solid'
            borderRadius='8px'
            borderColor='box-border'
            px='15px'
            paddingTop='10px'
            paddingBottom='16px'
            boxShadow='box-shadow-primary'
          >
            <Text fontSize='12px'>
              Collecting helps ensure that only legitimate data transactions are
              added to a blockchain. Participants trying to earn a chance.
              Staking helps ensure that only legitimate data transactions are
              added to a blockchain. Participants trying to earn a chance.
            </Text>
          </Box>

          <Heading fontSize='14px' fontWeight='500' marginY='20px'>
            My Rewards
          </Heading>

          <VStack spacing={1} align='stretch'>
            {Object.keys(pendingBalance.balances)
              .filter(tokenKey => {
                const { balances } = pendingBalance
                const balance = new BigNumber(
                  balances?.[tokenKey]?.toString() || balances?.[tokenKey]
                )
                return balance.isGreaterThan(0)
              })
              .map(tokenKey => {
                const token = data.find(token => token.key === tokenKey)
                const decimal = 1 / Math.pow(10, token?.decimals || 18)
                const { balances } = pendingBalance
                const balance = new BigNumber(
                  balances?.[tokenKey]?.toString() || balances?.[tokenKey]
                ).times(decimal)

                return (
                  <Flex
                    alignItems='center'
                    justifyContent='space-between'
                    key={tokenKey}
                    border='1px solid'
                    borderColor='box-border'
                    borderRadius='6'
                    padding='10px'
                    marginBottom='8px'
                  >
                    <Flex alignItems='center'>
                      <Image
                        src={token?.uiConfig.tokenLogo}
                        height={30}
                        width={30}
                        alt='token image'
                        marginRight='8px'
                      />
                      <Text fontSize='12px' fontWeight='500' marginRight='5px'>
                        {token?.uiConfig.name}
                      </Text>
                      <Text color='text-light-gray'>{token?.name}</Text>
                    </Flex>
                    <Text fontSize='12px' fontWeight='600'>
                      {balance.decimalPlaces(2).toFormat()} {token?.name}
                    </Text>
                    <Button
                      variant='secondary'
                      h='24px'
                      w='72px'
                      fontSize='12px'
                    >
                      Approve
                    </Button>
                  </Flex>
                )
              })}
          </VStack>
        </ModalBody>

        <ModalFooter marginTop='60px'>
          <Box flex='1' />
          <Button variant='square' onClick={onClose}>
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
