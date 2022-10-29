SERVER_CONTAINER := raspberry-pi-shop-web-1

dev-install:
	cd client && npm install

dev:
	cd client && npm run dev

migrate:
	docker exec ${SERVER_CONTAINER} bash -c "poetry run python manage.py migrate"

cron:
	docker exec ${SERVER_CONTAINER} bash -c "poetry run python manage.py runcrons"
