
<template>
  <form @submit.prevent="envoyerMessage">
    <ul>
      <li>
        <label for="name">Nom&nbsp;:</label>
        <input type="text" id="name" v-model="formData.nom" required />
      </li>
      <li>
        <label for="prenom">Prénom&nbsp;:</label>
        <input type="text" id="prenom" v-model="formData.prenom" required />
      </li>
      <li>
        <label for="email">Adresse e-mail&nbsp;:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </li>
      <li>
        <label for="msg">Message&nbsp;:</label>
        <textarea id="msg" v-model="formData.message" required></textarea>
      </li>
    </ul>
    <div class="button">
      <button type="submit">Envoyer le message</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "TheContacts",
  data() {
    return {
      formData: {
        nom: "",
        prenom: "",
        email: "",
        message: "",
      },
    };
  },
  methods: {
    async envoyerMessage() {
      try {
        const response = await fetch("/api/envoyer-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });
        if (response.ok) {
          alert("Message envoyé avec succès !");
        } else {
          alert("Erreur lors de l'envoi du message.");
        }
      } catch (error) {
        console.error("Erreur :", error);
        alert("Une erreur est survenue.");
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: black;
  border: 1px solid #ddd;
  border-radius: 5px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

textarea {
  height: 100px;
  resize: vertical;
}

.button {
  text-align: center;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
