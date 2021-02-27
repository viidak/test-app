# Flight Advisor Code Test

## Technologies

    - Programming Language: PHP v8.0
    - Framework: Laravel v8.0
    - Database: MySql
    - Security: JWT auth
    - Containers: Docker

## Before Starting

Copy .env.example into .env

```bash
cp .env.example .env
```

Install required laravel package

```bash
composer require laravel/sail --dev
```

If you get a memory limit error, run the command as:

```bash
COMPOSER_MEMORY_LIMIT=-1 composer require laravel/sail --dev
```

Generate a secret key for JWT auth

```bash
php artisan jwt:secret
```

## Running in Docker

The service can also be run completely in Docker by running

```bash
docker-compose up -d
```

## Initial data

Run migrations

```bash
php artisan migrate
```

After running migrations database will be populated with tables needed for the project.
There are also two pre-populated users:

admin:

-   username: adminuser
-   password: admin123

regular:

-   username: useruser
-   password: admin123

## Known Issues

-   Finish the front end hookup to backend API calls
-   Write tests
