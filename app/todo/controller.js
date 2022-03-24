const todos = require('./dummy');

module.exports = {

    getAllTodos: async (req, res) => {

        try {

            res.status(200).json({
                message: 'all the todos',
                data: todos
            });

        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
            });
        }

    },

    findTodo: async (req, res) => {

        const {
            id
        } = req.params;

        try {

            const findTodo = todos.find(todo => todo.id === parseInt(id));

            if (findTodo) {
                return res.status(200).json({
                    todo: findTodo,
                    message: 'a single todo'
                });

            }

            return res.status(404).json({
                message: 'todo not found',
            })

        } catch (error) {
            res.status(500).json({
                message: 'internal server error',
            });
        }

    }

}