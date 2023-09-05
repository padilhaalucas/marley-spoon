.PHONY: build
build:
	docker-compose build --no-cache

.PHONY: up
up:
	docker-compose up -d

.PHONY: down
down:
	docker-compose down

.PHONY: logs
logs:
	docker-compose logs -f

.PHONY: rebuild
rebuild: down build up
