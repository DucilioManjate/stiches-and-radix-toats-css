import { Button } from "@/components/buttons.module";
import { Container } from "@/components/container.module";
import { Cardbody } from "@/components/layout.module";

export default function Layout() {
    return (
        <>
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
                            <img src="/https://png.pngtree.com/png-vector/20200329/ourlarge/pngtree-character-avatar-of-businessman-with-bg" alt="Logo" />
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