function Menu() {
  return (
    <>
      <a href="/" style={{color: 'white'}} >Home</a> |
      <a href="/produtos" style={{color: 'white'}}>Produtos</a> |
      <a href="/produtos/novo" style={{color: 'white'}} >Novo Produto</a> |
      <a href="/clientes" style={{color: 'white'}} >Clientes</a> |
      <a href="/clientes/novo" style={{color: 'white'}} >Novo Cliente</a> |
      <a href="/fornecedors" style={{color: 'white'}} >Fornecedores</a> |
      <a href="/fornecedors/novo" style={{color: 'white'}} >Novo Fornecedor</a> |
      <a href="/categorias" style={{color: 'white'}} >Categorias</a> |
      <a href="/categorias/novo" style={{color: 'white'}} >Nova Categoria</a> |
      <a href="/funcionarios" style={{color: 'white'}} >Funcionários</a> |
      <a href="/funcionarios/novo" style={{color: 'white'}} >Novo Funcionário</a>
    </>
  );
}
export default Menu;

