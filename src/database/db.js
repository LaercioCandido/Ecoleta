const sqlite3 = require("sqlite3")
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db



//CRUD em sqlite3

db.serialize(() => {

/*
    //criar a tabela
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            name TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
*/
/*

    //inserir dados na tabela
    const query = `
        INSERT INTO places (
            image,
            name,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (?,?,?,?,?,?,?)
    `

    const values = [
        "https://images.unsplash.com/photo-1583637439358-0f6c9f2dd58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "Colectoria",
        "Rua Guilherme Zemballa, Jardim América",
        "Número 260",
        "Santa Catarina",
        "Rio do Sul",
        "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }

    db.run(query, values, afterInsertData)
*/
/*

    //consultar dados na tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
        if (err) {
            return console.log(err)
        }
        console.log("Aqui estão seus registros")
        console.log(rows)
    })


*/
/*
    //deletar dados da tabela
    db.run(`DELETE FROM places WHERE id == ?`, [10], function(err) {
        if (err) {
            return console.log(err)
        }
        console.log("Registro deletado com sucesso")
    })

*/

})
