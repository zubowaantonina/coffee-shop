export const spinner = {
    beforeMount() {
		this.$store.dispatch('setIsLoading', true)
	
		setTimeout(() => {
		  this.$store.dispatch('setIsLoading', false)
		}, 1500)
	},
	computed: {
		isLoading() {
			return this.$store.getters["getIsLoading"];
		}
	}
}