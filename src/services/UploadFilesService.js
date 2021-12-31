import http from "../http-common";

class UploadFilesService {
    upload(file, onUploadProgress) {
        console.log("Catch me here..");
        let formData = new FormData();

        formData.append("files",file);

        return http.post("/rest/documents/uploadFiles",formData, {
            headers: {
                "Content-type": "multipart/form-data"
            },
            onUploadProgress
        });
    }
    delete(id){
        return http.delete("/rest/documents/" + id);
    }
    download(id){
        return http.get("/rest/documents/download/" + id);
    }

    getFiles() {
        return http.get("/rest/documents");
    }
}

export default new UploadFilesService();
