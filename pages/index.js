import { Container, Box, Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg="black" p={3} mb={6} align="center" color="white">
                Hello, I&apos;m a front-end developer based in India!
            </Box>
            <Box display={{md: 'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Rishabh Singh
                    </Heading>
                    <p>Open Source Developer ( Contributor / Developer / Engineer )</p>
                </Box>
            </Box>
        </Container>
    )
}

export default Page