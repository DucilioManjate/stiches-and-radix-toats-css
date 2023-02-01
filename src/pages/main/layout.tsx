import { Button } from "@/components/buttons.module";
import { Container } from "@/components/container.module";

import { Cardbody } from "@/components/layout.module";
import { useTheme } from "next-themes";

export default function Layout() {
    const { theme, setTheme } = useTheme();
    const handleColorChange = () =>
        setTheme(theme === "light" ? "dark" : "light");

    return (
        <>

            <Container container={"v1"}>
                <Container V2={"nav"}>
                    <Container ul={"li"}>
                        <li>Home</li>
                        <li>Contato</li>
                        <li>Equipe</li>
                        <li>Projetos</li>
                        <li>Blog</li>
                        <li>Portifolio</li>
                        <Button
                            color={"quaternary"}
                            size={"sm"}
                            csx={"styled"}
                            onClick={handleColorChange}>
                            Mudar tema
                        </Button>

                    </Container>
                </Container>
            </Container>
            <Container container="v1">
                <Cardbody
                    container={"basic"}
                    grid={"row"}
                    card={"cardBox"}
                    cardColor={"blue"}
                >
                    <Cardbody
                        container={"basic"}
                        cardTitle={"h1"}
                    >
                        <Cardbody container={"basic"}
                            cardImage={"position"}>
                        </Cardbody>

                        Equipe de RH
                        <Cardbody container={"basic"}
                            cardTitle={"p"}>
                            Equipe responsavel pela gestão dos recursos humanos da puntook composto pela diretoria de RH ....
                        </Cardbody>
                        <Button
                            v1={"media"}
                            color={"primary"}
                            size={"md"}
                            speace={"sp"}
                            csx={"styled"}

                        >
                            Entrar
                        </Button>
                    </Cardbody>
                </Cardbody>

                <Cardbody
                    container={"basic"}
                    grid={"row"}
                    card={"cardBox"}
                    cardColor={"green"}
                >
                    <Cardbody
                        container={"basic"}
                        cardTitle={"h1"}
                    >
                        Equipe de desenvolvimento de sofware
                        <Cardbody container={"basic"}
                            cardTitle={"p"}>
                            Team work responsavel por toda a parte de desenvolvimento de software da puntook.
                        </Cardbody>
                        <Button
                            v1={"media"}
                            color={"tertiary"}
                            size={"md"}
                            speace={"sp"}
                            csx={"styled"}

                        >
                            Entrar
                        </Button>
                    </Cardbody>
                </Cardbody>

                <Cardbody
                    container={"basic"}
                    grid={"row"}
                    card={"cardBox"}
                    cardColor={"red"}
                >
                    <Cardbody
                        container={"basic"}
                        cardTitle={"h1"}
                    >
                        Equipe de relacionamneto com o cliente
                        <Cardbody container={"basic"}
                            cardTitle={"p"}>
                            Team work responsavel com a interação direacta com o cliente.
                        </Cardbody>
                        <Button
                            v1={"media"}
                            color={"secondary"}
                            size={"md"}
                            speace={"sp"}
                            csx={"styled"}

                        >
                            Entrar
                        </Button>
                    </Cardbody>

                </Cardbody>

            </Container>
        </>
    )
}