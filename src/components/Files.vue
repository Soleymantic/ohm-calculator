<template>
  <div class="card">
    <div class="card-header">List of Files</div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item"
          v-for="(file, index) in fileInfos"
          :key="index"
      >
        <a :href="download(file.id)">{{ file.name }}</a>
      </li>
    </ul>
  </div>

</template>

<script>
import UploadService from "../services/UploadFilesService";

export default {
  name: "Files",
  data(){
    return {
      fileInfos: []
    }
  },
  mounted() {
    UploadService.getFiles().then((response) => {
      this.fileInfos = response.data;
    });
  },
  methods: {
    download(id){
      return "https://ohmcalc-admin.herokuapp.com/rest/documents/download/" + id;
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
