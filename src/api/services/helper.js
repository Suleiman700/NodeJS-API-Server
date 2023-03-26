const { Router } = require('express');


module.exports = class AbsRepository {
    name
    repo;
    defaultRelations;

    constructor(name, repo, defaultRelations=[]) {
        this.name = name;
        this.repo = repo;
        this.defaultRelations = defaultRelations;
    }


    /**
     * Read all entities from db
     *
     * @param options Find options
     * @param cached Use cache
     * @returns Entity array
     */
    readAll(options={}, cached) {
        try {
            if (Object.keys(options).length) {
                return this.repo.find({
                    relations: this.defaultRelations,
                    ...options
                });
            }

            return this.repo.find({
                relations: this.defaultRelations
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Read a certain entity from db
     *
     * @param options Find options
     * @returns Entity
     */
    read(options) {
        try {
            return this.repo.findOne({
                relations: this.defaultRelations,
                ...options
            });
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Save new or updated entity to db
     *
     * @param entity Entity to save
     * @returns Saved entity
     */
    async save(entity) {
        try {
            const saved = await this.repo.save(entity);
            return saved;
        } catch (err) {
            throw new Error(err);
        }
    }

    /**
     * Delete entity from db
     *
     * @param entity Entity to delete
     * @returns Deleted entity
     */
    async delete(entity) {
        try {
            const deleted = await this.repo.remove(entity);
            return deleted;
        } catch (err) {
            throw new Error(err);
        }
    }
}
