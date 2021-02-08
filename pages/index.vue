<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        AI Joe MVP Prototype
      </h1>
      <div>
        <h2>
          Write to Firestore.
        </h2>
        <div>
          <button @click="writeToFirestore" :disabled="writeSuccessful">
            <span v-if="!writeSuccessful">Write now</span>
            <span v-else>Successful!</span>
          </button>
        </div>
      </div>
      <div>
  <h2>
    Read from Firestore.
  </h2>
  <div>
    <button @click="readFromFirestore" :disabled="readSuccessful">
      <span v-if="!readSuccessful">Read now</span>
      <span v-else>Successful!</span>
    </button>
    <p>{{text}}</p>
  </div>
</div>
    </div>
  </div>
</template>

<script>
import {fireDb} from '~/plugins/firebase.js'

export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: ""
    }
  },
  methods: {
    async writeToFirestore() {
      const ref = fireDb.collection("test").doc("test")
      const document = {
        text: "This is a test message."
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },

    async readFromFirestore() {
      const ref = fireDb.collection("test").doc("test")
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.text = snap.data().text
      this.readSuccessful = true
}
  }
}
</script>

<style>

</style>
