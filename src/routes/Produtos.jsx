import { Link } from "react-router-dom";
import { AiFillEdit as Editar } from "react-icons/ai";
import { RiDeleteBin2Fill as Excluir } from "react-icons/ri";
import styles from "./Produtos.module.css";
import { useState, useEffect } from "react";
import ModalAction from "../components/ModalAction/ModalAction";

export default function Produtos() {
  document.title = "Produtos";

    const [listaJson, setListaJson] = useState([{}]);

  useEffect(()=>{
    fetch("http://localhost:5000/produtos",{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((response)=> response.json())
    .then((listaProdutosJson)=> {
        setListaJson(listaProdutosJson)
    })
  },[]);

  const [open, setOpen] = useState(false);

  return (
    <> 
      <h1>Lista de Produtos</h1>

      {open ? <ModalAction open={open} setOpen={setOpen}/> : ""}

      <button onClick={()=> setOpen(true)}>OPEN - MODAL</button>

      <div>
        <table className={styles.tblEstilo}>
          <thead className={styles.tblHeader}>
            <tr>
              <th>ID</th>
              <th>NOME</th>
              <th>DESCRIÇÃO</th>
              <th>IMAGEM</th>
              <th>PREÇO</th>
              <th>EDITAR/EXCLUIR</th>
            </tr>
          </thead>

          <tbody>
            {listaJson.map((item, indice) => (
              <tr key={indice} className={styles.tblRow}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td>
                  <img src={`${item.img}`} alt={`${item.desc}`} />
                </td>
                <td>{item.preco}</td>
                <td>
                  {" "}
                  <Link to={`/editar/produtos/${item.id}`}>
                    {" "}
                    <Editar />{" "}
                  </Link>{" "}
                  /{" "}
                  <Link to={`/excluir/produtos/${item.id}`}>
                    {" "}
                    <Excluir />{" "}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr>
              <td colSpan={6}>PRODUTOS</td>
            </tr>
          </tfoot>

        </table>
      </div>
    </>
  );
}
