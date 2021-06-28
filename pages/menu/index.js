import { getLayout } from '../../components/MenuLayout';

const MenuPage = ({children}) => (
  <>
    {children}
  </>
)

MenuPage.getLayout = getLayout

export default MenuPage
