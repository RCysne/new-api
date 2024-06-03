const knex = require("../database/knex");

class NotesController {
    async create(request, response) {
        const { title, description, tags, links } = request.body;

        const { user_id } = request.params;

        // Cadastrando a nota e devolvendo a id da nota cadastrada, e inserindo pelo knex os campos no objeto passado
        // A variável tem que ser dentro de um array, pq quando a gente insere a nova nota, ele devolve o id dentro de um array, na primeira posição. 
        const [note_id] = await knex("notes").insert({
            title,
            description,
            user_id
        })

        // percorrendo em cada link, e pra cada link retorna o note_id e alterando o campo lnk para url que vai receber o link
        const linksInsert = links.map(link => {
            return {
                note_id,
                url: link
            }
        })

        // Inserir na tabela links, os links dentro do vetor linksInsert
        await knex("links").insert(linksInsert)


        const tagsInsert = tags.map(name => {
            return {
                note_id,
                name,
                user_id
            }
        })

        // inserir na tabela tags as tagas dentro do vetor tagsInsert
        await knex("tags").insert(tagsInsert)

        response.json()

    }

    async show(request, response) {
        const { id } = request.params;

        const note = await knex("notes").where({ id }).first();
        const tags = await knex("tags").where({ note_id: id }).orderBy("name");
        const links = await knex("links").where({ note_id: id }).orderBy("created_at")

        return response.json({
            ...note,
            tags,
            links
        })

    }

    async delete(request, response) {
        const { id } = request.params;

        await knex("notes").where({ id }).delete();

        return response.json();
    }

    async index(request, response) {
        const { title, user_id } = request.query;


        const notes = await knex("notes")
            .where({ user_id })
            .whereLike("title", `%${title}%`)
            // Procurando no title, o valor escrito no title (whereLike) que contenha a palavra no texto inteiro (antes ou depois de qualquer outra %palavra%)
            .orderBy("title")
        
        
        return response.json(notes)
    }
}

module.exports = NotesController;