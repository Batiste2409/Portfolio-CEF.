<template>
  <header>
    <div class="image-container" @click="togglePopup('popup1')">
      <div class="image-title">CV de Batiste</div>
      <img src="/public/cv.png" alt="CV de Batiste" />
      <div v-if="activePopup === 'popup1'" class="popup">Voici le CV de Batiste : https://github.com/Batiste2409/Cv.git . 20/09/2024</div>
    </div>

    <div class="image-container" @click="togglePopup('popup2')">
      <div class="image-title">Projet Commentaire</div>
      <img src="/public/commentaire.png" alt="Projet Commentaire" />
      <div v-if="activePopup === 'popup2'" class="popup">Voici le Projet Commentaire : https://github.com/Batiste2409/Commentaire.git. 04/10/2024</div>
    </div>

    <div class="image-container" @click="togglePopup('popup3')">
      <div class="image-title">Cahier des Charges</div>
      <img src="/public/cahier.png" alt="Cahier des Charges" />
      <div v-if="activePopup === 'popup3'" class="popup">Voici le Cahier des Charges.24/10/2024.HTML </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activePopup: null, 
    };
  },
  methods: {
    togglePopup(popupId) {
      console.log(`Popup toggled: ${popupId}`); 
      this.activePopup = this.activePopup === popupId ? null : popupId; 
    },
  },
};
</script>

<style scoped>
header {
  color: whitesmoke;
  background-color: #0400ff;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}


.image-container {
  position: relative;
  display: inline-block;
  text-align: center;
  cursor: pointer;
  width: 150px;
}


.image-title {
  font-size: 16px;
  margin-bottom: 10px;
  font-weight: bold;
  color: #fff;
}


img {
  width: 150px;
  height: 150px;
  display: block;
  margin: auto;
  cursor: zoom-in;
}


.popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 0, 0);
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  font-size: 14px;
  text-align: center;
}
</style>
