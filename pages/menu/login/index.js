import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, Input } from "@chakra-ui/react";
import { useRouter } from 'next/router'
import { getLayout } from '../../../components/MenuLayout';

const Login = () => {
  const router = useRouter()
  const { slug } = router.query;
  const onClose = () => router.back()
  return (
    <Drawer
      isOpen={true}
      placement="right"
      onClose={onClose}
      size="lg"
    >
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login Flow</DrawerHeader>

          <DrawerBody>
            Login Body
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
              </Button>
            <Button color="blue">Login</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

Login.getLayout = getLayout;

export default Login;