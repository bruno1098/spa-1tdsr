import { useEffect, useState } from "react";
import "./ModalAction.scss";

export default function ModalInserir(props) {

  let novoId;
  const[produto,setProduto] = useState({
    id:"",
    nome:"",
    desc:"",
    img:"",
    preco:"" 
  });
  let atributoDoObjeto = "id";
  let valor = 1;
  setProduto({...produto,[atributoDoObjeto]:valor})

  useEffect(() => {

    fetch("http://localhost:5000/produtos",{
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((response)=> {
      console.log("Status do REQUEST HTTP : " + response.status);
      return response.json()
    })
    .then((response)=> {
      novoId = (response[response.length-1].id +1);
      console.log("NOVO ID : " + novoId);
      return novoId;
    })
  },[]);


  const handlechange = (e) => {

    const {name,value} = e.target;
    setProduto({...produto,[name]:value})
  }

  if (props.open) {
    return (
      <div className="container">
        <h1>CADASTRO DE PRODUTOS</h1>

        <div>
          <form>
            <fieldset>
              <span className="btnClose" onClick={() => props.setOpen(false)}>
                X
              </span>
              <legend>Novo Produto</legend>
              <div>
                <input type="hidden" name="id" value={produto.id}/>
              </div>
              <div>
                <label htmlFor="idNome">Nome</label>
                <input
                  type="text"
                  name="nome"
                  placeholder="Digite o nome do produto."
                  required
                  value={produto.nome} onChange={handlechange}
                />
              </div>
              <div>
                <label htmlFor="idDesc">Descrição</label>
                <input
                  type="text"
                  name="desc"
                  placeholder="Digite a descrição do produto."
                  required
                  value={produto.desc} onChange={handlechange}
                />
              </div>
              <div>
                <label htmlFor="idImg">Imagem</label>
                <input
                  type="url"
                  name="img"
                  placeholder="Digite a url da imagem do produto."
                  required
                  value={produto.img} onChange={handlechange}
                />
              </div>
              <div>
                <label htmlFor="idPreco">Preço</label>
                <input
                  type="text"
                  name="preco"
                  placeholder="Digite o preço do produto."
                  required
                  value={produto.preco} onChange={handlechange}
                />
              </div>
              <div>
                <button>CADASTRAR</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}
