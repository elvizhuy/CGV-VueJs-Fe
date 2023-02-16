<template>
  <div v-if="isOpen" class="modal" @click="handleClose">
    <div class="modal__container" @click.prevent>
      <div class="modal__header">
        <div class="modal__close" @click="handleClose">X</div>
      </div>
      <div class="modal__body">
        <slot></slot>
        <h1>alo</h1>
      </div>
      <div class="modal__footer"></div>
    </div>
  </div>

 
  <!-- Modal -->
  <!-- <div v-if="isOpen" class="modal fade" id="MoviesModal" tabindex="-1" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">...</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
    },
    handleCloseModal: {
      type: Function,
    },
  },
  methods: {
    handleClose() {
      this.handleCloseModal();
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}
.modal__container {
  width: 800px;
  height: 70vh;
  overflow-y: scroll;
  margin: auto;
  margin-top: 100px;
  background: white;
  border: 1px solid #888;
  padding: 10px 20px;
}

.modal__container::-webkit-scrollbar {
  width: 3px;
}

.modal__container::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}

.modal__container::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}

.modal__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal__close {
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  text-align: center;
  font-size: 30px;
}
.modal__close:hover {
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
</style>
