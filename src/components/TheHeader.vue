<template>
    <header>
      <a href="/public/20240605_134254 (1).jpg" target="_blank"> 
        <img src="/public/20240605_134254 (1).jpg" alt="Photo de Batiste" />
      </a>
      <h1>BATISTE GUÉDET</h1>
      <h2>Développeur web Junior</h2>
      <address>
        <a href="https://maps.app.goo.gl/6WbTSNmmbk29HLjHA" target="_blank">
          Verdun 39100 Dole
        </a>
        <a href="mailto:bguedet24@gmail.com">bguedet24@gmail.com</a>
        <a href="tel:+33786669513">+33786669513</a>
      </address>
    </header>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  header img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    display: block;
    margin: auto; 
    border: 3px solid rgb(21, 255, 0); 
    cursor: zoom-in; 
  }

    h1, h2, p {
     text-align: center;
}

address{ 
    color: whitesmoke;
    background-color:brown;
    width: auto;
    height: 50px;
    display: flex;
    justify-content: space-around;
  }
  address a {
    width: 25%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    }  

    header{
      color: whitesmoke;
      background-color: #0400ff;
      width: 500px;
      margin: auto;
    }

  </style>
  