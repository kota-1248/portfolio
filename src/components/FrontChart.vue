<script>
import { Radar } from 'vue-chartjs';


export default {
  name: 'FrontChart',
  extends: Radar,

  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'Front-end',
            data: [],
            backgroundColor: [
              'rgba(181, 26, 26, 0.25)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
          }
        ]
      },
      options:{
	scale:{
		ticks:{
			beginAtZero:true,
			max:50,
			min:0
		}
	}
}
    }
  },
  mounted () {
    this.getSkills()
    this.renderChart(this.data, this.options,)
  },
  methods:{
    getSkills(){
      const names = this.$store.getters.skillName(0)
       this.data.labels = names
      const scores = this.$store.getters.skillScore(0)
      this.data.datasets[0].data = scores
    }
  } 
}
</script>