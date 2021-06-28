import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter, Button, Input } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from 'next/router'
import { getLayout } from '../../../components/MenuLayout';

const ItemDetails = () => {
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
          <DrawerHeader>Item Details {slug}</DrawerHeader>

          <DrawerBody>
            <p>
              Best drawer body message!
            </p>
            <Link href='/menu/login' scroll={false}>
              Go to Login
            </Link>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
              </Button>
            <Button color="blue">Add</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  )
}

ItemDetails.getLayout = getLayout;

export default ItemDetails;