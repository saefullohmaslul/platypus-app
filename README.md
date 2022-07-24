# PLATYPUS - Libraries Management App

## Migrations

1. Init migration

    ```
    npx sequelize init
    ```

2. Create migration

    ```
    npx sequelize migration:generate --name <name-tabel-or-action>

    # example
    
    npx sequelize migration:generate --name create-roles
    ```

3. Running Migration

    ```
    npx sequelize db:migrate
    ```

4. Undo Migration

    ```
    npx sequelize db:migrate:undo
    ```

Tipe Tabel yang biasa dipake:

- STRING(255): akan mengalokasikan langsung 255 space (255kb)
- TEXT(1024): akan alokasikan yang diisi (100kb)
- INTEGER: number
- FLOAT, DOUBLE: kalo data kita punya koma
- JSON, JSONB: kalo data kita json
- UUID: id unique, biasa buat jadi tipe dari id, alt selain integer
- BOOLEAN: true/false