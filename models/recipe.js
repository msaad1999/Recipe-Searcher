class Recipe {
    constructor(uri, label, image, url) {
        this.uri = uri;
        this.label = label;
        this.image = image;
        this.url = url;
    }

    getUri() {
        return this.uri;
    }

    getLabel() {
        return this.label;
    }

    getImage() {
        return this.image;
    }

    getUrl() {
        return this.url;
    }
}