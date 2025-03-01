import ops from "@/assets/asking-question.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container mx-auto py-10">
      <div className="flex flex-col items-center justify-center">
        <Image
          quality={75}
          priority={true}
          width={480}
          src={ops}
          alt="imagem para a página não encontrada"
        />
        <h1 className="font-display text center py-6 text-2xl font-bold text-blue-400">
          {" "}
          Ops...! Página não encontrada
        </h1>
        <Link href="/">
          <Button
            className="flex items-center justify-center transition-colors"
            size={"lg"}
            variant={"default"}
          >
            Voltar a Home
          </Button>
        </Link>
      </div>
    </main>
  );
}
