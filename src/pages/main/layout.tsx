import { Container } from "@/components/container.module";
import { Cardbody } from "@/components/layout.module";

export default function Layout() {
    return (
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
                    Equipe de RH
                    <Cardbody container={"basic"}
                        cardTitle={"p"}>
                        Equipe responsavel pela gestão dos recursos humanos da puntook composto pela diretoria de RH e os gestores de cada área.
                    </Cardbody>
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
                </Cardbody>
            </Cardbody>
    
        </Container>
    )
}