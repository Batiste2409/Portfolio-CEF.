<template>
  <div id="top"></div>

  <footer>
    <section>
      <a href="https://fr.linkedin.com/" target="_blank">
        <img src="/public/Linkedin.png" alt="Logo Linkedin" />
      </a>
      <a href="https://github.com/" target="_blank">
        <img src="/public/Logo GitHub.png" alt="Logo GitHub" />
      </a>
      <a href="https://x.com/Accueil?mx=2" target="_blank">
        <img src="/public/Twitter.png" alt="Logo Twitter" />
      </a>
    </section>
    <small>
      Dernière mise à jour le <time datetime="2024/12/16"></time>16 décembre 2024.
    </small>
    <a href="javascript:void(0);" onclick="scrollToTop()">
      <img src="/public/fleche.jpg" alt="Remonter en haut" class="logo" />
    </a>
  </footer>
</template>

<style scoped>
  footer img {
    max-width: 40px;
    max-height: 40px;
  }

  footer {
    width: 500px;
    display: flex;
    margin: auto;
    justify-content: center;
    align-items: center;
    color: whitesmoke;
    background-color: #0400ff;
  }

  small {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 100%;
    margin-bottom: 10px;
  }

  .logo {
    width: 100px;
    cursor: pointer;
  }
</style>

<script>
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  }
</script>
