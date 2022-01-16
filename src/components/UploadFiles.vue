<template>
  <div>
    <router-link to="/">Ohm Calculator</router-link>
    <div v-if="progressInfos">
      <div class="mb-2"
           v-for="(progressInfo, index) in progressInfos"
           :key="index"
      >
        <span>{{progressInfo.fileName}}</span>
        <div class="progress">
          <div class="progress-bar progress-bar-info"
               role="progressbar"
               :aria-valuenow="progressInfo.percentage"
               aria-valuemin="0"
               aria-valuemax="1000"
               :style="{ width: progressInfo.percentage + '%' }"
          >
            {{progressInfo.percentage}}%
          </div>
        </div>
      </div>
    </div>

    <label class="btn btn-default">
      <input type="file" multiple @change="selectFile"/>
    </label>

    <button class="btn btn-success"
            :disabled="!selectedFiles"
            @click="uploadFiles"
    >
      Upload
    </button>

    <div class="card">
      <div class="card-header">Liste an Dokumenten</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"
            v-for="(file, index) in fileInfos"
            :key="index"
        >
          <a :href="download(file.id)">{{ file.name }}</a>
          <button @click="deleteFile(file.id)" class="btn btn-danger">L&ouml;schen</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import UploadService from "../services/UploadFilesService";

export default {
  name: "UploadFiles",
  data(){
    return {
      selectedFiles : undefined,
      progressInfos: [],
      message: "",
      fileInfos: []
    };
  },
  mounted(){
    UploadService.getFiles().then((response) => {
      this.fileInfos = response.data;
    });
  },
  methods: {
      selectFile(){
        this.progressInfos = [];
        this.selectedFiles = event.target.files;
      },
    uploadFiles(){
        this.message = "";

        for (let i = 0; i < this.selectedFiles.length; i++) {
          this.upload(i, this.selectedFiles[i]);
        }
    },
    download(id){
        return "https://ohmcalc-admin.herokuapp.com/rest/documents/download/" + id;
    },
    deleteFile(id){
      UploadService.delete(id).then(() => {
        UploadService.getFiles().then((response) => {
          this.fileInfos = response.data;
        });
      })
    },
    upload(idx,file){
      this.progressInfos[idx] = { percentage: 0, fileName: file.name };

      UploadService.upload(file, (event) => {
        this.progressInfos[idx].percentage = Math.round(100 * event.loaded / event.total);
      })
          .then((response) => {
            let prevMessage = this.message ? this.message + "\n" : "";
            this.message = prevMessage + response.data.message;

            return UploadService.getFiles();
          })
          .then((files) => {
            this.fileInfos = files.data;
          })
          .catch(() => {
            this.progressInfos[idx].percentage = 0;
            this.message = "Could not upload the file:" + file.name;
          });
    }
  }
}
</script>
<style scoped>
  li.list-group-item {
    display: flex;
    justify-content: space-between;
  }
</style>
