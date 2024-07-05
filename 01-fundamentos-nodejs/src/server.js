import http from "node:http";
import { Json } from "./middlewares/json.js";

// request = req
// response = res

// HTTP
// - method HTTP
// - url

// GET, POST, PUT, PATCH, DELETE

// GET => Buscar um recurso no back-end
// POST => Criar um recurso no back-end
// PUT => Editar/Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso no back-end

// GET /users => Buscando usuários no back-end
// GET /users => Criar um usuário no back-end

// Early return => No js dentro de uma função, se o codigo bater no return nada abaixo é executado

// Stateful - Stateless

// JSON - Javascript Object Notation

// Cabeçalhos (Requisição/Respostas) => Metadados

// HTTP Status Code

// req/res => streams

const users = [];

const server = http.createServer(async (req, res) => {
  const { method, url } = req;

  await Json(req, res)

  if (method === "GET" && url === "/users") {
    // Early return
    return res
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    const { name, email } = req.body;
    users.push({
      id: 1,
      name,
      email,
    });
    return res.writeHead(201).end();
  }

  return res.writeHead(404).end();
});

server.listen(3333);

// localhost:3333
