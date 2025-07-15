build:
	docker build -t student-api .

test:
	npm ci

lint:
	npx eslint .

docker-login:
	echo $(DOCKER_PASSWORD) | docker login -u $(DOCKER_USERNAME) --password-stdin

docker-push:
	docker tag student-api $(DOCKER_USERNAME)/student-api:latest
	docker push $(DOCKER_USERNAME)/student-api:latest
