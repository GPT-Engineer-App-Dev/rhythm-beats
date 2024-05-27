import { Box, Button, Container, Flex, Heading, HStack, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg">
          MusicStream
        </Heading>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Home
          </Link>
          <Link as={RouterLink} to="/browse" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Browse
          </Link>
          <Link as={RouterLink} to="/library" _hover={{ textDecoration: "none", color: "gray.400" }}>
            My Library
          </Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        height="60vh"
        bgImage="url('/images/hero-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        alignItems="center"
        justifyContent="center"
        color="white"
        textAlign="center"
        p={4}
      >
        <VStack spacing={4}>
          <Heading as="h2" size="2xl">
            Discover Your Next Favorite Song
          </Heading>
          <Text fontSize="lg">Stream millions of songs and podcasts for free.</Text>
          <Button colorScheme="teal" size="lg">
            Get Started
          </Button>
        </VStack>
      </Flex>

      {/* Featured Playlists Section */}
      <Box as="section" p={8}>
        <Heading as="h3" size="lg" mb={4}>
          Featured Playlists
        </Heading>
        <Flex wrap="wrap" justifyContent="space-around">
          <Box width="200px" p={4} textAlign="center">
            <Image src="/images/playlist1.jpg" alt="Playlist 1" borderRadius="md" mb={2} />
            <Text>Top Hits</Text>
          </Box>
          <Box width="200px" p={4} textAlign="center">
            <Image src="/images/playlist2.jpg" alt="Playlist 2" borderRadius="md" mb={2} />
            <Text>Chill Vibes</Text>
          </Box>
          <Box width="200px" p={4} textAlign="center">
            <Image src="/images/playlist3.jpg" alt="Playlist 3" borderRadius="md" mb={2} />
            <Text>Workout</Text>
          </Box>
        </Flex>
      </Box>

      {/* User Login/Sign-up Section */}
      <Flex as="section" bg="gray.100" p={8} justifyContent="center" alignItems="center">
        <VStack spacing={4} width="400px" bg="white" p={8} borderRadius="md" boxShadow="md">
          <Heading as="h3" size="lg">
            Welcome Back!
          </Heading>
          <Button colorScheme="teal" width="full">
            Login
          </Button>
          <Button variant="outline" colorScheme="teal" width="full">
            Sign Up
          </Button>
        </VStack>
      </Flex>

      {/* Footer */}
      <Flex as="footer" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Text>&copy; 2023 MusicStream</Text>
        <HStack spacing={8}>
          <Link as={RouterLink} to="/about" _hover={{ textDecoration: "none", color: "gray.400" }}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Contact
          </Link>
          <Link as={RouterLink} to="/terms" _hover={{ textDecoration: "none", color: "gray.400" }}>
            Terms of Service
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;