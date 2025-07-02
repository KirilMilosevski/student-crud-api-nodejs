compose-up:
	docker-compose up --build

compose-down:
	docker-compose down

logs:
	docker-compose logs -f api
