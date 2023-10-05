import { useNavigate, useParams } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";

export default function ExcluirProdutos() {
  document.title = "Excluir Produto";

  //utilizando redirecionamento de ROTAS com useNavigate();
  const navigate = useNavigate();

  //Utilizando o HOOK useParams()
  const { id } = useParams();

  //Filtrando o produto selecionado byId
  const produto = ListaProdutos.filter((item) => item.id === parseInt(id))[0];

  const handleDelete = () => {
    
    let indice;
    indice = ListaProdutos.findIndex((item) => item.id === parseInt(id));

    ListaProdutos.splice(indice, 1);

    //Redirecionando após realizar a edição do produto filtrado.
    navigate("/produtos");
  };

  return (
    <>
      <div>
        <h1>Excluir Produtos</h1>
        <div>
          <section>
            <h2>Deseja realmente excluir esse produto?</h2>
            <h3>Nome: {produto.nome}</h3>
            <h3>Descrição: {produto.desc}</h3>
            <div>
              <img src={produto.img} alt={produto.desc} />
            </div>
            <h3>Preço: {produto.preco}</h3>
          </section>
          <button onClick={handleDelete}>EXCLUIR</button>
          <button onClick={()=> navigate("/produtos")}>CANCELAR</button>
        </div>
      </div>
    </>
  );
}
