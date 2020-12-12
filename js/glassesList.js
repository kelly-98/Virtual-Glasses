export class GlassesList{
    constructor() {
        this.glist = [];
    }

    addGlasses(glasses) {
        this.glist.push(glasses);    
    }

    renderGlasses() {
        let content = "";
        content = this.glist.reduce((glContent, item, index) => {
            glContent += `
                <div class="col-4">
                    <img class="img-fluid" src="${item.src}" alt="Glasses">
                </div>
            `;
            return glContent;
        }, '');
        return content;
    }
}