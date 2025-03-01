import Link from "next/link";
const NavBar = () => {
  return (
    <div className="container mx-auto">
      <nav className="flex items-center justify-between py-6">
        <Link href="/">Logo</Link>

        <ul className="flex justify-center space-x-4">
          <li className="hover:underline">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:underline">
            <Link href="/sobre">Sobre</Link>
          </li>
          <li className="hover:underline">
            <Link href="/vagas">Vagas</Link>
          </li>
          <li className="hover:underline">
            <Link href="/vagas/cadastro">Cadastrar vagas</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
