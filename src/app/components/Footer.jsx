import Link from "next/link"

export default function Footer() {
    return (
        <>
            <footer>
                <Link href="/terminosdeuso"><p>Términos de uso</p></Link>
                <Link href="/politicas"><p>Políticas de privacidad</p></Link>
                <Link href="/contacto"><p>Contacto</p></Link>
            </footer>
        </>
    )
}

/* Colocar Links para que cada parte del formulario lleve a alguna página. 
Contacto: formulario de contacto
Políticas de privacidad: buscar algo o lorem ipsum
Términos de uso: buscaro algo o lorem ipsum */