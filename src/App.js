import React, { useState, useEffect } from "react";
import "./styles.css";

function buscaDados() {
  const url = "https://covid19-brazil-api.now.sh/api/report/v1";
  return fetch(url) // fetch é pegar, então  (pegue os dados dessa API);
    .then(async (response) => await response.json())
    .then(async (dados) => {
      return await dados;
    })
    .catch((err) => console.error("Erro ao buscar dados", err));
}

function App() {
  const [casos, setCasos] = useState([]);
  useEffect(() => {
    buscaDados().then((dados) => setCasos(dados.data)); // por ser promisse, preciso do then! // aqui estamos setando os dados da API dentro do vetor casos
  }, []);

  return (
    <div className="container" style={{ paddingBottom: "60px" }}>
      <h1
        className="display-6"
        style={{ padding: "25px 0 15px 0", fontWeight: "bold" }}
      >
        Dados da API
      </h1>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Estado </th>
            <th>Casos </th>
            <th>Mortes </th>
            <th>Suspeitas </th>
          </tr>
        </thead>
        <tbody>
          {casos.map(function (item, index) {
            return (
              <tr key={index}>
                <td> {item.state + ` / ` + item.uf} </td>
                <td> {item.cases} </td>
                <td> {item.deaths} </td>
                <td> {item.suspects} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
