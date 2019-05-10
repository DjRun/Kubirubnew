

var options = {
	useEasing: true,
	useGrouping: true,
	separator: " ",
	decimal: "."
};
var started = false;
var statistics = $(".statistic");
var temp_statics = new Array();


statistics.each(function(index) {
	temp_statics.push($(statistics[index]).html())
	$(statistics[index]).html("0");
});

var pos = $(".count").offset();
$(document).on("scroll", () => {
	//1005.4000244140625  ------------ 537.5999755859375
	
	if($(document).scrollTop() >= 537.6){
		if(!started){
			statistics.each(function(index){
				var value = temp_statics[index];
				var statisticAnimation = new CountUp(statistics[index], 0, value, 0, 5, options);
				statisticAnimation.start();
			});
			started = true;		
		}
	}
	
	
})