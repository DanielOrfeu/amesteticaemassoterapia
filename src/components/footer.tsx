import { Instagram, Mail, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="footer flex flex-col-reverse items-center justify-center gap-5 break-all bg-vital-4 p-8 text-white sm:flex-row">
      <div className="contacts flex flex-col gap-2">
        <span className="flex self-center sm:hidden">Contatos</span>
        <div className="phone flex flex-row items-center gap-2">
          <PhoneCall size={28} className="hidden sm:flex" />
          <div className="items flex flex-col">
            <Link
              href={
                'https://wa.me/5521989711190?text=Oi!%20Vim%20pelo%20site%20AM%20Est%C3%A9tica%20e%20Massoterapia%20e%20gostaria%20de%20algumas%20informa%C3%A7%C3%B5es.'
              }
            >
              <span>(21) 98971-1190</span>
            </Link>
          </div>
        </div>
        <div className="insta flex flex-row items-center gap-2">
          <Instagram size={28} className="hidden sm:flex" />
          <div className="items flex flex-col">
            <Link href={'https://www.instagram.com/instituto.vitalidade'}>
              <span>@instituto.vitalidade</span>
            </Link>
            <Link href={'https://www.instagram.com/amesteticaemassoterapia'}>
              <span>@amesteticaemassoterapia</span>
            </Link>
          </div>
        </div>
        <div className="email flex flex-row items-center gap-2">
          <Mail size={28} className="hidden sm:flex" />
          <div className="items flex flex-col">
            <Link href={'mailto:contato@amesteticaemassoterapia.com.br'}>
              <span>contato@amesteticaemassoterapia.com.br</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="info flex flex-col gap-2">
        <span>Amanda Christinne Moraes do Nascimento</span>
        <span>CNPJ: 055.847.346/0001-11</span>
        <span>CRBM: CRBM 00462- TECG</span>
      </div>
      <div className="logo">
        <Image
          src="/logo-sem-fundo-com-borda.png"
          alt="am estértica e massoterapia logo"
          width={150}
          height={150}
          className="logo"
        />
      </div>
    </footer>
  )
}

export default Footer
