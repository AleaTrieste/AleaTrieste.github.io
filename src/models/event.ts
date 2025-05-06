export default class Event {
    title: String;
    description: String;
    images: String[];

    constructor(title: String, description: String, images: String[]) {
        this.title = title;
        this.description = description;
        this.images = images;
    }
}