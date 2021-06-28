import Link from "next/link";
import { getLayout as getSiteLayout } from "./MainLayout";
import { useRouter } from "next/router";

const ActiveLink = ({ children, href, className }) => {
  const router = useRouter();
  return (
    <Link href={href} scroll={false}>
      <a>
        {children}
      </a>
    </Link>
  );
};

const MenuLayout = ({ children }) => {
  return (
    <div>
      <h1>Menu Layout</h1>
      <div>{children}</div>
    </div>
  );
};

export const getLayout = page =>
  getSiteLayout(<MenuLayout>{page}</MenuLayout>);

export default MenuLayout;
