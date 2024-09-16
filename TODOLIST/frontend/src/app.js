const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: []
    }
  },
  methods: {
    addEditableRow() {
      this.tasks.push({
        name: '',
        description: '',
        startDate: '',
        endDate: '',
        status: 'em atraso' // Definindo o status inicial como "Em Atraso"
      });
    },
    removeRow(index) {
      this.tasks.splice(index, 1);
    },
    moveUp(index) {
      if (index > 0) {
        const temp = this.tasks[index];
        this.tasks[index] = this.tasks[index - 1];
        this.tasks[index - 1] = temp;
      }
    },
    moveDown(index) {
      if (index < this.tasks.length - 1) {
        const temp = this.tasks[index];
        this.tasks[index] = this.tasks[index + 1];
        this.tasks[index + 1] = temp;
      }
    }
  }
}).mount('#app');
