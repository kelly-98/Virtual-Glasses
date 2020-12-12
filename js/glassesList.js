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
                    <img class="img-fluid" data-id="${item.id}" onclick="tryOnGlasees(event)" src="${item.src}" alt="Glasses">
                </div>
            `;
            // truyen vao ham trong onclick event de lay thong tin ng dung click
            return glContent;
        }, '');
        return content;
    }
}