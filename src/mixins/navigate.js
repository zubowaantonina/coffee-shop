export const navigate = {
  methods: {
    navigate(id) {
      this.$router.push({ name: this.name, params: { id: id } });
      // this.$router.push('/goods-page/item')
    },
  },
  mounted(){
    console.log('mixid');
  }
};
