const service = require("../services/blog");

module.exports = {
    $posts: {
        save: async ({ body }, response) => {
            await service.posts.save(body);
            response.redirect("/posts");
        },
        update: async ({ body, params }, response) => {
            const { id } = params
            await service.posts.update(body, id)
            response.redirect("/posts");
        },
        delete: async ({ params }, response) => {
            const { id } = params
            await service.posts.delete(id)
            response.redirect("/posts");
        }
    },
    $authors: {
        save: async ({ body }, response) => {
            await service.authors.save(body);
            response.redirect("/posts");
        }
    },
    render: {
        list: async (request, response) => {
            const posts = await service.posts.findAll();
            response.render("posts-list", { posts });
        },
        save: async (request, response) => {
            const authors = await service.authors.findAll();
            response.render("create-post", { authors });
        },
        display: async ({ params }, response) => {
            const post = await service.posts.find(params.id);
            post ? response.render("post-detail", { post }) : response.status(404).render("404");
        },
        update: async ({ params }, response) => {
            const post = await service.posts.find(params.id);
            const authors = await service.authors.findAll();
            response.render("update-post", { post, authors });
        },
        author: (request, response) => {
            response.render("create-author");
        }
    },
    redirect: {
        list: (request, response) => { response.redirect('/posts'); }
    }
}