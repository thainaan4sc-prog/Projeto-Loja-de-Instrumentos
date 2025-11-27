import { Fornecedor } from '../../database/tables';

async function Fornecedores() {
  const fornecedors = await Fornecedor.findAll();

  return (
    <>
      <h1 style={{ color: '#3e1e04ff'}} >Listagem de Fornecedores</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Razão Social</th>
            <th>CNPJ</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {fornecedors.map((f) => (
            <tr key={f.id}>
              <td>{f.id}</td>
              <td>{f.razsoc}</td>
              <td>{f.cnpj}</td>
              <td>{f.telefone}</td>
              <td>{f.email}</td>
              <td>{f.endereco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Fornecedores;