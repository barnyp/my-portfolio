import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from "@react-email/components";

interface ContactFormEmailProps {
  name: string;
  email: string;
  message: string;
}

export const ContactFormEmail = ({
  name,
  email,
  message,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New message from your portfolio site</Preview>
    <Body>
      <Container>
        <Heading>New message from {name}</Heading>
        <Text>{message}</Text>
        <Text>From: {email}</Text>
      </Container>
    </Body>
  </Html>
); 