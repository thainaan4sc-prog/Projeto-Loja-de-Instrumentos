import { Categoria } from '../../database/tables';

async function Categorias() {
  const categorias = await Categoria.findAll();

  return (
    <>
      <h1 style={{ color: '#3e1e04ff'}} >Listagem de Categorias</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Tipo de Produto</th>
          </tr>
        </thead>
        <tbody>
          {categorias.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nome_cat}</td>
              <td>{c.descricao}</td>
              <td>{c.tipo_produto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Categorias;