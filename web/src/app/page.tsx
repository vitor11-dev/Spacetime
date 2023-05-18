import { Blur } from '@/components/Blur'
import { Stripes } from '@/components/Stripes'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* rigth */}
      <section className="relative flex flex-col items-start justify-between overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        <Blur />
        <Stripes />

        <Link href="" className="flex items-center gap-3 text-left">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400"></div>
        </Link>
      </section>

      {/* left */}
      <section className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registrou nenhuma lembrança, comece a{' '}
            <Link href="" className="underline hover:text-gray-50">
              criar agora
            </Link>
            !
          </p>
        </div>
      </section>
    </main>
  )
}
