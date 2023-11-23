.PHONY: all
all: build zip

.PHONY: build
build:
	yarn build

.PHONY: zip
zip:
	zip -r archive.zip _locales dist icons manifest.json