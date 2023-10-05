import logoReact from "../assets/react.svg"

export default function Conteudo(props){

    //Declarativa
    let altLogoReact = "Logo React";
    return(
        <>
        {/* Imperativa */}
            <section>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa harum ratione distinctio illum doloremque dolorem ipsum optio, sed minima, quis totam vitae a iste. Repellat tempora rerum molestiae obcaecati eius.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nobis dolorum magni quae consequuntur, mollitia quis provident voluptate modi error accusamus aperiam excepturi cumque temporibus aut possimus. Non, possimus minus!</p>
                    <img src={logoReact} alt={altLogoReact} />
                    <img src={props.imagemLogoProps} alt={props.imagemAltProps} />
                </div>
            </section>
        </>
    )
}