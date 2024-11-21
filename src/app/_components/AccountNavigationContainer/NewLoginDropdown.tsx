import { Button } from "@chakra-ui/react";
import Link from "next/link";

function NewLoginDropdown() {
  return (
    <div className="grid grid-cols-[1fr]">
      <Link href="/">
        <Button variant="subtle">Giriş Yap</Button>
      </Link>
      <Link href="/">
        <Button variant="subtle">Üye Ol</Button>
      </Link>
    </div>
  );
}

export default NewLoginDropdown;
