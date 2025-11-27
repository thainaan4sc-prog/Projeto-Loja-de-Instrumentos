import { Cliente } from '../../database/tables';

async function Clientes() {
  const clientes = await Cliente.findAll();

  return (
    <>
      <h1 style={{ color: '#3e1e04ff'}} >Listagem de Clientes</h1>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>CPF</th>
            <th>Endereço</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nome_cliente}</td>
              <td>{c.telefone}</td>
              <td>{c.email}</td>
              <td>{c.cpf}</td>
              <td>{c.endereco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Clientes;
