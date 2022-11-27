export default {
    dragOver(ev) {
        ev.preventDefault();
        this.isFileOver = true;
    },
    dragLeave() {
        this.isFileOver = false;
    },
    sizeLabel(value){
        let counter = 0;
        const valueCp = value;
        while(value > 1){
            value /= 1000;
            counter++;
        }

        switch(counter-1){
            case 0:{
                return `${valueCp} bytes`
            }
            case 1:{
                return `${(valueCp/1000).toFixed(2)} kB`
            }
            case 2:{
                return `${(valueCp/1000000).toFixed(2)} MB`
            }
            case 3:{
                return `${(valueCp/1024000000).toFixed(2)} GB`
            }
            default:
                return '0 kB'
        }
    },
    addFile(event) {
        event.preventDefault();
        this.dragLeave();
        const fileHolder = (event.dataTransfer && event.dataTransfer.items) ? event.dataTransfer.items : this.$refs.file_input.files;
        
        [...fileHolder].forEach(item => {
            if ((item.kind === "file" || event.target === this.$refs.file_input) && this.availableFileTypes.findIndex(f => f === item.type) > -1) {
                let file;
                if(item.getAsFile){
                    file = item.getAsFile();
                }else{
                    file = item;
                }
                this.files.push(file);
                this.notModifiedFiles.push(file);
                this.files[this.files.length - 1].__img = {
                    src: URL.createObjectURL(file),
                    sizeLabel: this.sizeLabel(file.size)
                };
                this.size += file.size;
            }
        });
        if(event.target === this.$refs.file_input){
            this.$refs.file_input.value = null;
        }
        const mapped = this.files.map(im => ({url: im.__img.src}));
        this.setImageArray(mapped);
        this.$emit("file_added", this.notModifiedFiles);
    },
    removeFile(ev, id){
        ev.stopPropagation();
        this.size -= this.files[id].size;
        this.files.splice(id, 1);
    },
    plusBtnClick(ev, disabled){
        if(disabled) return;
        if(this.$refs.dropzone === ev.target && this.files.length>0) return;
        this.$refs.file_input.click();
    }
}