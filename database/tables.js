import { DataTypes } from "sequelize";
import mysql from "./mysql.js";

const Produto = mysql.define('Produto', {
    nome_prod: DataTypes.STRING,
    quantidade: DataTypes.INTEGER,
    descricao: DataTypes.STRING,
    estoque: DataTypes.INTEGER,
    marca: DataTypes.STRING,
    modelo: DataTypes.STRING,
    preco_venda: DataTypes.DECIMAL,
    preco_custo: DataTypes.DECIMAL,
}, {
    tableName: 'produtos'
}); 

const Categoria = mysql.define('Categoria', {
    nome_cat: DataTypes.STRING,
    descricao: DataTypes.STRING,
    tipo_produto: DataTypes.STRING,
}, {
    tableName: 'categorias'
});

const Cliente = mysql.define('Cliente', {
    nome_cliente: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    endereco: DataTypes.STRING,
}, {
    tableName: 'clientes'
});

const Fornecedor = mysql.define('Fornecedor', {
    razsoc: DataTypes.STRING,
    cnpj: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
}, {
    tableName: 'fornecedores'
});

const Funcionario = mysql.define('Funcionario', {
    nome_func: DataTypes.STRING,
    cpf: DataTypes.STRING,
    telefone: DataTypes.STRING,
    email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    tipo_func: DataTypes.STRING,
    salario: DataTypes.DECIMAL,
}, {
    tableName: 'funcionarios'
});

const Venda = mysql.define('Venda', {
    total_v: DataTypes.DECIMAL,
    data_v: DataTypes.DATE,
    pagamento_v: DataTypes.STRING,
    status_v: DataTypes.STRING,
}, {
    tableName: 'vendas'
});

const Compra = mysql.define('Compra', {
    total_c: DataTypes.DECIMAL,
    data_c: DataTypes.DATE,
}, {
    tableName: 'compras'
});

const Item_Venda = mysql.define('Item_Venda', {
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.DECIMAL,
}, {
    tableName: 'item_vendas'
});

const Item_Compra = mysql.define('Item_Compra', {
    quantidade: DataTypes.INTEGER,
    preco_unitario: DataTypes.DECIMAL,
}, {
    tableName: 'item_compras'
});

const Fornece = mysql.define('Fornece', {}, {
    tableName: 'forneces'
});

// ------------------- RELAÇÕES -------------------

Produto.belongsTo(Categoria);
Categoria.hasMany(Produto);

Venda.belongsTo(Cliente);
Venda.belongsTo(Funcionario);
Cliente.hasMany(Venda);
Funcionario.hasMany(Venda);

Compra.belongsTo(Funcionario);
Compra.belongsTo(Fornecedor);
Funcionario.hasMany(Compra);
Fornecedor.hasMany(Compra);

Item_Venda.belongsTo(Venda);
Item_Venda.belongsTo(Produto);
Venda.hasMany(Item_Venda);
Produto.hasMany(Item_Venda);

Item_Compra.belongsTo(Compra);
Item_Compra.belongsTo(Produto);
Compra.hasMany(Item_Compra);
Produto.hasMany(Item_Compra);

Produto.belongsToMany(Fornecedor, { through: Fornece });
Fornecedor.belongsToMany(Produto, { through: Fornece });

// ------------------- SINCRONIZAÇÃO -------------------

mysql.sync();

export { 
    Produto, 
    Categoria, 
    Cliente, 
    Fornecedor, 
    Funcionario, 
    Venda, 
    Compra, 
    Item_Venda, 
    Item_Compra, 
    Fornece, 
    mysql 
};
